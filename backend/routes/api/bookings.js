//holds route paths to /api/bookings
const express = require("express");
const { Op } = require("sequelize");
const { Booking, Spot, SpotImage } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();
const { check } = require("express-validator");
const { handleValidationErrors } = require("../../utils/validation");

async function dateConverter(value) {
  const convertedDate = new Date(value);
  const currentDay = String(convertedDate.getDate()).padStart(2, "0");
  const currentMonth = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const currentYear = String(convertedDate.getFullYear()).padStart(2, "0");
  const currentHours = String(convertedDate.getHours()).padStart(2, "0");
  const currentMinutes = String(convertedDate.getMinutes()).padStart(2, "0");
  const currentSeconds = String(convertedDate.getSeconds()).padStart(2, "0");

  return `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`;
}
async function authorize(req, res, next) {
  const bookingId = req.params.bookingId;
  const search = await Booking.findOne({
    where: { id: Number(bookingId) },
    include: [{ model: Spot }],
  });

  //pull the user id to check if it matches with req.user (same person who booked it) or spot owner
  //if it does match -> continue on to next function
  if (req.user.id === search.userId || req.user.id === search.Spot.ownerId) {
    return next();
  }

  //else throw an authorization error
  const err = new Error("Forbidden");
  err.title = "Authorization required";
  err.status = 403;
  return next(err);
}

async function ifUser(req, res, next) {
  const bookingId = req.params.bookingId;
  const search = await Booking.findOne({
    where: { id: Number(bookingId) },
    include: [{ model: Spot }],
  });

  //pull the user id to check if it matches with req.user (same person who booked it) or spot owner
  //if it does match -> continue on to next function
  if (req.user.id === search.userId) {
    return next();
  }

  //else throw an authorization error
  const err = new Error("Forbidden");
  err.title = "Authorization required";
  err.status = 403;
  return next(err);
}

//validate if booking exist
async function checkExist(req, res, next) {
  //use param booking id to look for the spot
  const bookingId = req.params.bookingId;

  const search = await Booking.findByPk(Number(bookingId));
  //if there is no booking that matches the given spotid from parameter -> throw an error
  if (search === null) {
    const err = new Error();
    err.message = "Booking couldn't be found";
    err.status = 404;
    return next(err);
  }
  return next();
}

async function hasPast(req, res, next) {
  //use param booking id to look for the spot
  const bookingId = req.params.bookingId;

  const search = await Booking.findByPk(Number(bookingId));

  //returns just the date of current not the time stamp
  let current = new Date(new Date().toDateString());

  //remove the Z so the value is in local time
  //turn the endDate into a string
  let endISOString = search.endDate.toISOString();
  //then take up to the z and then convert that to a new date object to compare to current object w/o time stamp
  let localEndDate = new Date(
    endISOString.substring(0, endISOString.length - 1),
  );

  if (localEndDate < current) {
    const err = new Error();
    err.message = "Past bookings can't be modified";
    err.status = 403;
    return next(err);
  }
  return next();
}

///get all bookings for current user
router.get("/current", requireAuth, async (req, res) => {
  const bookings = await Booking.findAll({
    where: { userId: req.user.id },
    attributes: [
      "id",
      "userId",
      "spotId",
      "startDate",
      "endDate",
      "createdAt",
      "updatedAt",
    ],
    include: [
      {
        model: Spot,
        attributes: [
          "id",
          "ownerId",
          "address",
          "city",
          "state",
          "country",
          "lat",
          "lng",
          "name",
          "price",
        ],
        include: {
          model: SpotImage,
          attributes: ["url"],
          where: { preview: true },
          required: false,
        },
      },
    ],
  });

  const modifiedResult = [];
  for (const entry of bookings) {
    const modifiedEntry = entry.toJSON();
    //if images for the spot exist then ->
    if (modifiedEntry.Spot.SpotImages.length !== 0) {
      modifiedEntry.Spot.previewImage = modifiedEntry.Spot.SpotImages[0].url;
      delete modifiedEntry.Spot.SpotImages;
      modifiedEntry.createdAt = await dateConverter(entry.createdAt);
      modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);

      let startDate = new Date(modifiedEntry.startDate.toString());
      let startYear = startDate.getUTCFullYear();
      let startMonth = String(startDate.getUTCMonth() + 1).padStart(2, "0");
      let startDay = String(startDate.getUTCDate()).padStart(2, "0");

      let endDate = new Date(modifiedEntry.endDate.toString());
      let endYear = endDate.getUTCFullYear();
      let endMonth = String(endDate.getUTCMonth() + 1).padStart(2, "0");
      let endDay = String(endDate.getUTCDate()).padStart(2, "0");

      modifiedEntry.startDate = `${startYear}-${startMonth}-${startDay}`;
      modifiedEntry.endDate = `${endYear}-${endMonth}-${endDay}`;
      modifiedEntry.Spot.price = Number(entry.Spot.price);

      modifiedResult.push(modifiedEntry);
    } else {
      delete modifiedEntry.Spot.SpotImages;
      let startDate = new Date(modifiedEntry.startDate.toString());
      let startYear = startDate.getUTCFullYear();
      let startMonth = String(startDate.getUTCMonth() + 1).padStart(2, "0");
      let startDay = String(startDate.getUTCDate()).padStart(2, "0");

      let endDate = new Date(modifiedEntry.endDate.toString());
      let endYear = endDate.getUTCFullYear();
      let endMonth = String(endDate.getUTCMonth() + 1).padStart(2, "0");
      let endDay = String(endDate.getUTCDate()).padStart(2, "0");

      modifiedEntry.startDate = `${startYear}-${startMonth}-${startDay}`;
      modifiedEntry.endDate = `${endYear}-${endMonth}-${endDay}`;

      modifiedEntry.createdAt = await dateConverter(entry.createdAt);
      modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
      modifiedEntry.Spot.price = Number(entry.Spot.price);

      modifiedResult.push(modifiedEntry);
    }
  }
  return res.json({
    Bookings: modifiedResult,
  });
});

//edit booking
router.put(
  "/:bookingId",
  requireAuth,
  checkExist,
  ifUser,
  hasPast,
  async (req, res) => {
    //use param booking id to look for the booking
    const bookingId = req.params.bookingId;
    //grab the startDate and endDate from req.body
    let { startDate, endDate } = req.body;

    let search = await Booking.findByPk(Number(bookingId));

    const testBooking = await Booking.build({
      userId: req.user.id,
      spotId: search.spotId,
      startDate: startDate,
      endDate: endDate,
    });

    const conflicts = await Booking.findAll({
      where: {
        startDate: {
          [Op.lte]: testBooking.endDate,
        },
        endDate: {
          [Op.gte]: testBooking.startDate,
        },
        id: {
          [Op.ne]: bookingId,
        },
      },
    });

    //if the above has conflicts
    if (conflicts.length !== 0) {
      const err = new Error();
      err.message =
        "Sorry, this spot is already booked for the specified dates";
      err.errors = {};

      for (entry of conflicts) {
        if (testBooking.startDate >= entry.startDate) {
          //add to errors object
          err.errors.startDate =
            "Start date conflicts with an existing booking";
        }
        if (testBooking.endDate <= entry.endDate) {
          //add to errors object
          err.errors.endDate = "End date conflicts with an existing booking";
        }
      }
      res.status(403);
      return res.json({
        message: err.message,
        errors: err.errors,
      });
    }

    //if it does not conflict with any previous bookings update the data

    search = await search.update({
      id: bookingId,
      userId: req.user.id,
      spotId: search.spotId,
      startDate: startDate,
      endDate: endDate,
    });
    console.log(search.toJSON());

    res.status(200);
    return res.json({
      id: search.id,
      userId: search.userId,
      spotId: search.spotId,
      startDate: startDate,
      endDate: endDate,
      updatedAt: await dateConverter(search.updatedAt),
      createdAt: await dateConverter(search.createdAt),
    });
  },
);

//delete booking
router.delete(
  "/:bookingId",
  requireAuth,
  checkExist,
  authorize,
  async (req, res) => {
    //use param booking id to look for the booking after checking it exists
    //and after checking if owner matches

    const bookingId = req.params.bookingId;
    //returns just the date of current not the time stamp
    let current = new Date(new Date().toDateString());
    //error response for bookings that have been started
    const search = await Booking.findByPk(Number(bookingId));
    //remove the Z so the value is in local time
    //turn the startDate into a string
    let startISOString = search.startDate.toISOString();

    //then take up to the z and then convert that to a new date object to compare to current object w/o time stamp
    let localStartDate = new Date(
      startISOString.substring(0, startISOString.length - 1),
    );

    if (localStartDate <= current) {
      const err = new Error();
      err.message = "Bookings that have been started can't be deleted";
      res.status(403);
      return res.json({
        message: err.message,
      });
    }

    await Booking.destroy({
      where: { id: bookingId },
    });
    res.status(200);
    return res.json({
      message: "Successfully deleted",
    });
  },
);

module.exports = router;
