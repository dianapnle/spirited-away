//holds route paths to /api/bookings
const express = require('express');
const { Op } = require('sequelize');
const { Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

// const validateBooking = [
//     //It checks to see if there is an address, etc
//     check('startDate')
//     .exists({ checkFalsy: true })
//     .withMessage('startDate cannot be in the past'),
//     check('endDate')
//     .exists({ checkFalsy: true })
//     .withMessage('endDate cannot be on or before startDate'),
//     handleValidationErrors
//   ];

async function dateConverter (value) {
    const convertedDate = new Date(value);
    const currentDay = convertedDate.getDate();
    const currentMonth = convertedDate.getMonth();
    const currentYear = convertedDate.getFullYear();
    const currentHours = convertedDate.getHours();
    const currentMinutes = convertedDate.getMinutes();
    const currentSeconds = convertedDate.getSeconds();

    const dateString = `${currentYear}-${currentMonth + 1}-${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`;
    return dateString
  };

async function authorize(req, res, next) {
    const bookingId = req.params.bookingId;
    const search = await Booking.findByPk(Number(bookingId));

    //pull the owner id to check if it matches with req.user
    //if it does match -> continue on to next function
    if (req.user.id === search.userId) {
      return next()
    };

  //else throw an authorization error
  const err = new Error('Authorization required');
  err.title = 'Authorization required';
  err.errors = { message: 'Authorization required' };
  err.status = 403;
  return next(err);
}

//validate if booking exist
async function checkExist (req, res, next) {
    //use param booking id to look for the spot
    const bookingId = req.params.bookingId;

    const search = await Booking.findByPk(Number(bookingId));
    //if there is no booking that matches the given spotid from parameter -> throw an error
    if (search === null) {
      const err = new Error();
      err.message = "Booking couldn't be found";
      err.status = 404;
      return next(err);
    };
    return next();
};

async function hasPast (req, res, next) {
    //use param booking id to look for the spot
    const bookingId = req.params.bookingId;

    const search = await Booking.findByPk(Number(bookingId));

    //returns just the date of current not the time stamp
    let current = new Date((new Date().toDateString()));

    //remove the Z so the value is in local time
    //turn the endDate into a string
    let endISOString = search.endDate.toISOString();
    //then take up to the z and then convert that to a new date object to compare to current object w/o time stamp
    let localEndDate = new Date(endISOString.substring(0, endISOString.length-1))

    if (localEndDate < current) {
      const err = new Error();
      err.message = "Past bookings can't be modified";
      err.status = 403;
      return next(err);
    };
    return next();
};




//edit booking
router.put("/:bookingId", requireAuth, authorize, checkExist, hasPast, async (req, res) => {
    //use param review id to look for the review
    const bookingId = req.params.bookingId;
    //grab the startDate and endDate from req.body
    let {startDate, endDate} = req.body;

    let search = await Booking.findByPk(Number(bookingId));

    const testBooking = await Booking.build({
        userId: req.user.id,
        spotId: search.spotId,
        startDate: startDate,
        endDate: endDate
      });
    await testBooking.validate();

  const conflicts = await Booking.findAll({
    where: {
      startDate: {
      [Op.lt]: testBooking.endDate
      },
      endDate: {
        [Op.gt]: testBooking.startDate
      },
      id: {
        [Op.ne]: bookingId
      }
      }
    }
  );


//if the above has conflicts
if (conflicts.length !== 0) {
  const err = new Error();
  err.message ="Sorry, this spot is already booked for the specified dates";
  err.errors = {};

  for (entry of conflicts) {
    if (testBooking.startDate < entry.endDate) {
        //add to errors object
        err.errors.startDate = "Start date conflicts with an existing booking"
    }
    if (testBooking.endDate > entry.startDate) {
        //add to errors object
        err.errors.endDate = "End date conflicts with an existing booking"
    }
  }
  res.status(403);
  return res.json({
        message: err.message,
        errors: err.errors
  });
}

    //if it does not conflict with any previous bookings update the data

    search = await search.update({
     id: bookingId,
     userId: req.user.id,
     spotId: search.spotId,
     startDate: startDate,
     endDate: endDate
   });
   console.log(search.toJSON())

  res.status(200);
  return res.json({
    id: search.id,
    userId: search.userId,
    spotId: search.spotId,
    startDate:  startDate,
    endDate: endDate,
    updatedAt: await dateConverter(search.updatedAt),
    createdAt: await dateConverter(search.createdAt)
  });

  });


//delete review
router.delete('/:bookingId', requireAuth, checkExist, authorize, async (req, res) => {
    //use param booking id to look for the booking after checking it exists
    //and after checking if owner matches

    const bookingId = req.params.bookingId;
    //returns just the date of current not the time stamp
    let current = new Date((new Date().toDateString()));
    //error response for bookings that have been started
    const search = await Booking.findByPk(Number(bookingId));
    //remove the Z so the value is in local time
    //turn the startDate into a string
    let startISOString = search.startDate.toISOString();
    //then take up to the z and then convert that to a new date object to compare to current object w/o time stamp
    let localStartDate = new Date(startISOString.substring(0, startISOString.length-1))

    if (localStartDate > current) {
        const err = new Error()
        err.message = "Bookings that have been started can't be deleted";
        res.status(403);
        return res.json({
          message: err.message
      })
    };

    await Booking.destroy({
       where: {id: bookingId}
    });
    res.status(200);
    return res.json({
         message:"Successfully deleted"
      });
});


module.exports = router;
