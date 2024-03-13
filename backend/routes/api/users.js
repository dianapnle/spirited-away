//will hold route paths beginning with /api/users
const express = require('express');
const bcrypt = require('bcryptjs');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const { User } = require('../../db/models');


const router = express.Router();

// Sign up
router.post('/', async (req, res) => {
    //extract email, password, and username from body
      const { email, password, firstName, lastName, username } = req.body;
      //then use bcrypt.hashsync to hash the user's provided password
      const hashedPassword = bcrypt.hashSync(password);
      //create a new User in the database with the username and email from the request body and the hashedPassword generated from bcryptjs
      const user = await User.create({ email, username, firstName, lastName, hashedPassword });


      //use setTokenCookie to log in the user by creating a JWT cookie with the user's non-sensitive information as its payload
      const safeUser = {
        id: user.id,
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
