//holds route paths to /api/session
const express = require('express');
const { Op } = require('sequelize');
const { Spot } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');


  // get spots
  // router.get('/', (req, res) => {
  //   const { address, city, state, country, lat, lng, name, description, price } = req.body
  //       const spot = {
  //         address: address,
  //         city: city,
  //         state: state,
  //         country: country,
  //         lat: lat,
  //         lng: lng,
  //         name: name,
  //         description: description,
  //         price: price
  //       }
  //       return res.json({
  //         spot
  //       });

  //      return res.json({ user: null });

  //   });


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
    })
    return res.json(spot);
})

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
  }
;

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
    price: price,
    createdAt: result.createdAt,
    updatedAt: result.updatedAt
  })
  return res.json(result);

})

//delete a spot
router.delete("/:spotId", requireAuth, validateUser, async (req, res) => {
  //use param spot id to look for the spot
  const spotId = req.params.spotId;
  await Spot.destroy({
    where: {id: spotId}
  })

  return res.json({
    message:"Successfully deleted"
    });

})
module.exports = router;
