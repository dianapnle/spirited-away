const { validationResult } = require('express-validator');

// middleware for formatting errors from express-validator middleware
//define an Express middleware called handleValidationErrors that will call validationResult from the express-validator package passing in the request.
const handleValidationErrors = (req, _res, next) => {
  const validationErrors = validationResult(req);
  //if validationErrors is NOT empty then ->create an error with all the validation error messages and invoke the next error-handling middleware
  if (!validationErrors.isEmpty()) {
      const errors = {};
      validationErrors
      .array()
      .forEach(error => errors[error.path] = error.msg);

      const err = Error("Bad request");
      err.errors = errors;
      err.status = 400;
      err.title = "Bad request";
      next(err);
    }
    //If there are no validation errors returned from the validationResult function, invoke the next middleware
  next();
};

module.exports = {
  handleValidationErrors
};
