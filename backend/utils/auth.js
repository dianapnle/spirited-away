const jwt = require('jsonwebtoken');
const { jwtConfig } = require('../config');
const { User } = require('../db/models');

const { secret, expiresIn } = jwtConfig;

// This first function is setting the JWT cookie after a user is logged in or signed up.
//It takes in the response and the session user and generates a JWT using the imported
//secret. It is set to expire in however many seconds you set on the JWT_EXPIRES_IN key in the .env file.
//The payload of the JWT will be the user's id, username, and email attributes. After the JWT is created, it's set to an HTTP-only cookie on the response as a token cookie.

//sends a JWT cookie
const setTokenCookie = (res, user) => {
    //create Token
    const safeUser = {
        id: user.id,
        email: user.email,
        username: user.username,
      };
      const token = jwt.sign(
        { data: safeUser },
        secret,
        { expiresIn: parseInt(expiresIn) } // 604,800 seconds = 1 week
      );

      const isProduction = process.env.NODE_ENV === "production";

      //set the token cookie
      res.cookie('token', token, {
        maxAge: expiresIn * 1000, // maxAge in milliseconds
        httpOnly: true,
        secure: isProduction,
        sameSite: isProduction && "Lax"
      });

      return token;
}

//middleware function that will verify and parse the JWT's payload and search
//database for a User with the id in the payload
//want to include the email, createdAt, and updatedAt attributes to be returned in the search but not the hashedpassword
//If there is a User found in the search, then save the user to a key of user onto the Request (req.user).
//If there is an error verifying the JWT or a Usercannot be found with the id in the JWT payload, then clear the token cookie from the response and set req.user to null.

const restoreUser = (req, res, next) => {
    // token parsed from cookies
    const { token } = req.cookies;
    req.user = null;

    return jwt.verify(token, secret, null, async (err, jwtPayload) => {
      if (err) {
        return next();
      }

      try {
        const { id } = jwtPayload.data;
        req.user = await User.findByPk(id, {
          attributes: {
            include: ['email', 'createdAt', 'updatedAt']
          }
        });

      } catch (e) {
        res.clearCookie('token');
        return next();
      }

      if (!req.user) res.clearCookie('token');

      return next();
    });
  };
//The restoreUser middleware will be connected to the API router so that all API route handlers will check if there is a current user logged in or not.
//restoreUser will nesure if a valid JWT cookie exists, the session user will be loaded into the req.user

// If there is no current user, return an error
const requireAuth = function (req, _res, next) {
    if (req.user) return next();

    const err = new Error('Authentication required');
    err.title = 'Authentication required';
    err.status = 401;
    return next(err);
  }



  module.exports = { setTokenCookie, restoreUser, requireAuth };
