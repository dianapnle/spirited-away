//will hold route paths beginning with /api/users
const express = require('express');
const bcrypt = require('bcryptjs');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();


//The validateSignup middleware is composed of the check and handleValidationErrors middleware
//   If at least one of the req.body values fail the check, an error will be returned as the response.
const validateSignup = [
    //It checks to see if req.body.email exists and is an email
    check('email')
    .exists({ checkFalsy: true })
    .isEmail()
    .withMessage('Please provide a valid email.'),
    //checks if req.body.username is a minimum length of 4 and is not an email
    check('username')
    .exists({ checkFalsy: true })
    .isLength({ min: 4 })
    .withMessage('Please provide a username with at least 4 characters.'),
    check('username')
    .not()
    .isEmail()
    .withMessage('Username cannot be an email.'),
    //checks if req.body.password is not empty and has a minimum length of 6
    check('password')
    .exists({ checkFalsy: true })
    .isLength({ min: 6 })
    .withMessage('Password must be 6 characters or more.'),
    check('firstName')
    .exists({ checkFalsy: true })
    .withMessage('Must not be empty'),
    check('lastName')
    .exists({ checkFalsy: true })
    .withMessage('Must not be empty'),
    handleValidationErrors
];

// Sign up
router.post('/', validateSignup, async (req, res) => {
    //extract email, password, and username from body
      const { email, password, firstName, lastName, username } = req.body;
      //then use bcrypt.hashsync to hash the user's provided password
      const hashedPassword = bcrypt.hashSync(password);
      //create a new User in the database with the username and email from the request body and the hashedPassword generated from bcryptjs
      const user = await User.create({ email, username, firstName, lastName, hashedPassword });


      //use setTokenCookie to log in the user by creating a JWT cookie with the user's non-sensitive information as its payload
      const safeUser = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        username: user.username,
      };

      await setTokenCookie(res, safeUser);

      return res.json({
        user: safeUser
      });
    }
  );


module.exports = router;
