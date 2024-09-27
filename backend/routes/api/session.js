//holds route paths to /api/session
const express = require("express");
const { Op } = require("sequelize");
const bcrypt = require("bcryptjs");
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");
const { setTokenCookie, restoreUser } = require("../../utils/auth");
const { User } = require("../../db/models");
const router = express.Router();

//Validate Logins
//The validateLogin middleware is composed of the check and handleValidationErrors middleware. It checks to see whether or not req.body.credential and req.body.password are empty.
//If one of them is empty, then an error will be returned as the response.
const validateLogin = [
  check("credential")
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage("Email or username is required"),
  check("password")
    .exists({ checkFalsy: true })
    .withMessage("Password is required"),
  handleValidationErrors,
];

// Log in
router.post("/", validateLogin, async (req, res, next) => {
  const { credential, password } = req.body;
  //query for the user identified by the provided credential (which can be either a username or email).
  //unscoped() removes the default scope so that you can read all the attributes including hashedPassword
  const user = await User.unscoped().findOne({
    where: {
      //can use either email or username to login so need to check if the credential matches username OR email
      [Op.or]: {
        username: credential,
        email: credential,
      },
    },
  });
  //If a user with those credentials isn't found in the database, then create a "Login failed" error and invoke the next error-handling middleware with it.
  // Or if a user with those credentials IS found in the database, but the password in the request body doesn't match the hashedPassword of the user found, then invoke the next error-handling middleware with the same "Login failed" error.
  // use the compareSync method from the bcryptjs node module to see if the request body's password matches with the user's hashedPassword in the database
  if (!user || !bcrypt.compareSync(password, user.hashedPassword.toString())) {
    const err = new Error("Login failed");
    err.status = 401;
    err.message = "Invalid credentials";
    // err.title = 'Login failed';
    // err.errors = { credential: 'The provided credentials were invalid.' };
    return next(err);
  }
  // If the user's password is correct, call setTokenCookie and return a JSON response with the user's non-sensitive information. Make sure the JSON response doesn't include the hashedPassword.

  const safeUser = {
    id: user.id,
    email: user.email,
    username: user.username,
    firstName: user.firstName,
    lastName: user.lastName,
  };

  await setTokenCookie(res, safeUser);

  return res.json({
    user: safeUser,
  });
});

// Restore session user
router.get("/", (req, res) => {
  const { user } = req;
  if (user) {
    const safeUser = {
      id: user.id,
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      username: user.username,
    };
    res.status(200);
    return res.json({
      user: safeUser,
    });
  } else {
    res.status(200);
    return res.json({ user: null });
  }
});

//Logout

router.delete("/", (_req, res) => {
  res.clearCookie("token");
  return res.json({ message: "success" });
});

module.exports = router;
