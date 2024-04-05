//holds route paths to /api/spots
const express = require('express');
const { Op } = require('sequelize');
const { Spot, SpotImage, User, Review, ReviewImage, Booking } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');
var Sequelize = require('sequelize');


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

//validate if spot exists
async function spotExist (req, res, next) {
    //use param spot id to look for the spot
    const spotId = req.params.spotId;

    const search = await Spot.findByPk(Number(spotId));
    //if there is no spot that matches the given spotid from parameter -> throw an error
    if (search === null) {
      const err = new Error();
      err.message = "Spot couldn't be found";
      err.status = 404;
      return next(err);
    };

    return next()
}


//authorize user
async function validateUser (req, res, next) {
  //use param spot id to look for the spot
    const spotId = req.params.spotId;

    const search = await Spot.findByPk(Number(spotId));
    //if there is no spot that matches the given spotid from parameter -> throw an error
    if (search === null) {
      const err = new Error();
      err.message = "Spot couldn't be found";
      err.status = 404;
      return next(err);
    };

    if (req.user.id === search.ownerId) {
      return next()
    }
    const err = new Error('Authorization required');
    err.title = 'Authorization required';
    err.errors = { message: 'Authorization required' };
    err.status = 403;
    return next(err);
  };


// The validateSignup middleware is composed of the check and handleValidationErrors middleware
//   If at least one of the req.body values fail the check, an error will be returned as the response.
const validateSpot = [
  //It checks to see if there is an address, etc
  check('address')
  .exists({ checkFalsy: true })
  .withMessage('Street address is required'),
  check('city')
  .exists({ checkFalsy: true })
  .withMessage('City is required'),
  check('state')
  .exists({ checkFalsy: true })
  .withMessage('State is required'),
  check('country')
  .exists({ checkFalsy: true })
  .withMessage('Country is required'),
  check('lat')
  .exists({ checkFalsy: true })
  .withMessage('Latitude must be within -90 and 90'),
  check('lng')
  .exists({ checkFalsy: true })
  .withMessage('Longitude must be within -180 and 180'),
  check('name')
  .exists({ checkFalsy: true })
  .withMessage('Name must be less than 50 characters'),
  check('description')
  .exists({ checkFalsy: true })
  .withMessage('Description is required'),
  check('price')
  .exists({ checkFalsy: true })
  .withMessage('Price per day must be a positive number'),
  handleValidationErrors
];

    // get all spots
    router.get('/', async (req, res) => {
      const spots = await Spot.findAll({
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat',
        'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt'],
        include: [
          { model: SpotImage, attributes: ['url'], where: {preview: true}, required: false},
          { model: Review, attributes: [], required: false}
        ],
       attributes: {
         include: [ // this adds AVG attribute to others instead of rewriting whole body
        [Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating']
      ]
       },
       //separates the average to each spot not overall average otherwise:
       group: ['Spot.id']
      });

    const modifiedResult = [];

    for (const entry of spots) {
     const modifiedEntry = entry.toJSON();
     //if images for the spot exist then ->
     if (modifiedEntry.SpotImages.length !== 0) {
       modifiedEntry.previewImage = modifiedEntry.SpotImages[0].url;
       delete modifiedEntry.SpotImages;
       modifiedEntry.createdAt = await dateConverter(entry.createdAt);
       modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
       modifiedResult.push(modifiedEntry);
     } else if (modifiedEntry.SpotImages.length === 0){
      modifiedEntry.createdAt = await dateConverter(entry.createdAt);
      modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
       delete modifiedEntry.SpotImages
     modifiedResult.push(modifiedEntry)
    };
  };
      return res.json({
        Spots:  modifiedResult
      });
    });



  // get spots by current user
  router.get('/current', requireAuth, async (req, res) => {
    const spots = await Spot.findAll({
      where: {
          ownerId: req.user.id
      },
      attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat',
      'lng', 'name', 'description', 'price'],
      include: [
        { model: SpotImage, attributes: ['url'], where: { preview: true}, required: false},
        { model: Review, attributes: [], required: false }
    ],
     attributes: {
      include: [
     [ Sequelize.fn('AVG', Sequelize.col('Reviews.stars')), 'avgRating' ],
    ]},
      //separates the average to each spot not overall average otherwise:
      group: ['Spot.id']
    });

  const modifiedResult = []
  for (const entry of spots) {
   const modifiedEntry = entry.toJSON();
   //if images for the spot exist then ->
   if (modifiedEntry.SpotImages.length !== 0) {
    // unbox first SpotImage as preview image, if available
     modifiedEntry.previewImage = modifiedEntry.SpotImages[0].url
     delete modifiedEntry.SpotImages;
     modifiedEntry.createdAt = await dateConverter(entry.createdAt);
     modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
     modifiedResult.push(modifiedEntry);
   } else if (modifiedEntry.SpotImages.length === 0){
       // always remove SpotImages implementation detail from user
   delete modifiedEntry.SpotImages;
   modifiedEntry.createdAt = await dateConverter(entry.createdAt);
   modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
   modifiedResult.push(modifiedEntry)}
}
    return res.json({
      Spots:  modifiedResult
    });
  });




  // get all reviews by a spot's id
  router.get('/:spotId/reviews', async (req, res) => {
    //use param spot id to look for the spot
    const { spotId } = req.params;
    const search = await Spot.findByPk(Number(spotId));
    //if there is no spot that matches the given spotid from parameter -> throw an error
    if (search === null) {
        const err = new Error()
        err.message = "Spot couldn't be found";
        res.status(404);
        return res.json({
          message: err.message
      })
    };

    const reviews = await Review.findAll({
      where: {
          spotId: spotId
      },
      attributes: ['id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt'],
      include: [
        { model: User, attributes: ['id', 'firstName', 'lastName']},
        { model: ReviewImage, attributes: ['id', 'url']},
      ]
    });

    modifiedReviews = [];
    for (entry of reviews) {
      const modifiedEntry = entry.toJSON();
        modifiedEntry.createdAt = await dateConverter(entry.createdAt);
        modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
        modifiedReviews.push(modifiedEntry);
    }
    res.status(200);
    return res.json({
      Reviews:  modifiedReviews
    });
  });


    // get details of a spot from an id
    router.get('/:spotId', spotExist, async (req, res) => {
      //use param spot id to look for the spot
      const { spotId } = req.params;
      const spot = await Spot.findByPk(spotId,
      {
        attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat',
        'lng', 'name', 'description', 'price', 'createdAt', 'updatedAt'],
        include: [
          { model: SpotImage, attributes: ['id', 'url', 'preview']},
          { model: User, as: "Owner", attributes: ['id', 'firstName', 'lastName']}
        ]
    });
     const modifiedResult = spot.toJSON();
      const sum = await Review.sum('stars',
        {where: {spotId: spotId} }
      )
      const count = await Review.count(
       { where: {spotId: spotId } }
      );

      const average = sum/count;

      modifiedResult.numReviews = count;
      modifiedResult.avgStarRating = average;
      modifiedResult.createdAt = await dateConverter(modifiedResult.createdAt);
      modifiedResult.updatedAt = await dateConverter(modifiedResult.updatedAt);
      res.status(200);
      return res.json(modifiedResult);
    });



//create a spot
router.post('/', requireAuth, validateSpot, async (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body;

    const spot = await Spot.create({
      ownerId: req.user.id,
      address: address,
      city: city,
      state: state,
      country: country,
      lat: lat,
      lng: lng,
      name: name,
      description: description,
      price: price
    });
    res.status(201);
    return res.json({
      id: spot.id,
      ownerId: spot.ownerId,
      address: spot.address,
      city: spot.city,
      state: spot.state,
      country: spot.country,
      lat: spot.lat,
      lng: spot.lng,
      name: spot.name,
      description: spot.description,
      price: spot.price,
      createdAt: await dateConverter(spot.createdAt),
      updatedAt: await dateConverter(spot.updatedAt)
    }
    );
});



//edit a spot
router.put("/:spotId", requireAuth, validateSpot, validateUser, async (req, res) => {
  const { address, city, state, country, lat, lng, name, description, price } = req.body;
  //use param spot id to look for the spot
  const spotId = req.params.spotId;
  let result = await Spot.findByPk(Number(spotId));

   await result.update({
    id: spotId,
    ownerId: req.user.id,
    address: address,
    city: city,
    state: state,
    country: country,
    lat: lat,
    lng: lng,
    name: name,
    description: description,
    price: price
  });
  res.status(200);
  return res.json({
    id: result.id,
    ownerId: result.ownerId,
    address: result.address,
    city: result.city,
    state: result.state,
    country: result.country,
    lat: result.lat,
    lng: result.lng,
    name: result.name,
    description: result.description,
    price: result.price,
    createdAt: await dateConverter(result.createdAt),
    updatedAt: await dateConverter(result.updatedAt)});

})

//delete a spot
router.delete("/:spotId", requireAuth, validateUser, async (req, res) => {
  //use param spot id to look for the spot
  const spotId = req.params.spotId;
  await Spot.destroy({
    where: {id: spotId}
  })
  res.status(200);
  return res.json({
    message:"Successfully deleted"
    });

});


//add an image to a spot
router.post('/:spotId/images', requireAuth, validateUser, async (req, res) => {
  const { url, preview } = req.body
  const spotId = req.params.spotId;
  const image = await SpotImage.create({
    spotId: spotId,
    url: url,
    preview: preview
  })
  res.status(200);
  return res.json(
  {
    id: image.id,
    url: image.url,
    preview: image.preview
  });
});


// The validateSignup middleware is composed of the check and handleValidationErrors middleware
//   If at least one of the req.body values fail the check, an error will be returned as the response.
const validateReview = [
  //It checks to see if there is an address, etc
  check('review')
  .exists({ checkFalsy: true })
  .withMessage('Review text is required'),
  check('stars')
  .exists({ checkFalsy: true })
  .withMessage('Stars must be an integer from 1 to 5'),
  handleValidationErrors
];

async function checkExist (req, res, next) {
    //use param spot id to look for the spot
    const spotId = req.params.spotId;

    const search = await Spot.findByPk(Number(spotId));
    //if there is no spot that matches the given spotid from parameter -> throw an error
    if (search === null) {
      const err = new Error();
      err.message = "Spot couldn't be found";
      err.status = 404;
      return next(err);
    };
    //use the spotId to pull the review's userid to check if it matches with req.user
    const result = await Review.findOne(
      {where: {
        spotId: spotId,
        userId: req.user.id
      }} );


    //if it does match and its not null-> throw an error
    if (result) {
      const err = new Error('User already has a review for this spot');
      err.title = 'Already exists';
      err.status = 500;
      return next(err);
    }

    return next();
}

//create a review for a post based on spot's id
router.post('/:spotId/reviews', requireAuth, validateReview, checkExist, async (req, res) => {
  const spotId = req.params.spotId;
  const {review, stars} = req.body;

  const newReview = await Review.create({
    userId: req.user.id,
    spotId: Number(spotId),
    review: review,
    stars: stars,
  })
  res.status(201);
  return res.json({
    id: newReview.id,
    userId: newReview.userId,
    spotId: newReview.spotId,
    review: newReview.review,
    stars: newReview.stars,
    createdAt: await dateConverter(newReview.createdAt),
    updatedAt: await dateConverter(newReview.updatedAt)
  })
});


async function notOwner (req, res, next) {
  //use param spot id to look for the spot
    const spotId = req.params.spotId;

    const search = await Spot.findByPk(Number(spotId));
    //if there is no spot that matches the given spotid from parameter -> throw an error
    if (search === null) {
      const err = new Error();
      err.message = "Spot couldn't be found";
      err.status = 404;
      return next(err);
    };
    //Spot must NOT belong to the current user for booking
    if (req.user.id !== search.ownerId) {
      return next();
    };

    const err = new Error('Authorization required');
    err.title = 'Authorization error';
    err.errors = { message: 'Cannot book own spot' };
    err.status = 403;
    return next(err);
  };


//create a booking for a post based on spot's id
router.post('/:spotId/bookings', requireAuth, notOwner, async (req, res) => {
  const spotId = req.params.spotId;
  const {startDate, endDate} = req.body;

  const newBooking = await Booking.build({
    userId: req.user.id,
    spotId: spotId,
    startDate: startDate,
    endDate: endDate
  });

  //validated against model constraints
  await newBooking.validate();

  const conflicts = await Booking.findAll({
    where: {
      startDate: {
      [Op.lte]: newBooking.endDate
      },
      endDate: {
        [Op.gte]: newBooking.startDate
      }
      }
    }
  );

  console.log(conflicts)
if (conflicts.length !== 0) {
  const err = new Error();
  err.message ="Sorry, this spot is already booked for the specified dates";
  err.errors = {};

  for (entry of conflicts) {
    if (newBooking.startDate <= entry.endDate) {
        //add to errors object
        err.errors.startDate = "Start date conflicts with an existing booking"
    }
    if (newBooking.endDate >= entry.startDate) {
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


  //if it does not conflict with any previous bookings save the data
  await newBooking.save();
  res.status(200);
  return res.json({
    id: newBooking.id,
    userId: newBooking.userId,
    spotId: newBooking.spotId,
    startDate:  startDate,
    endDate: endDate,
    updatedAt: await dateConverter(newBooking.updatedAt),
    createdAt: await dateConverter(newBooking.createdAt)
  })
});


module.exports = router;
