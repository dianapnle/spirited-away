//holds route paths to /api/session
const express = require('express');
const { Op } = require('sequelize');
const { Spot } = require('../../db/models');
const { setTokenCookie, requireAuth } = require('../../utils/auth');
const router = express.Router();


  // get spots
  router.get('/', (req, res) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
        const spot = {
          address: address,
          city: city,
          state: state,
          country: country,
          lat: lat,
          lng: lng,
          name: name,
          description: description,
          price: price
        }
        return res.json({
          spot
        });

       return res.json({ user: null });

    });

router.post('/', requireAuth, async (req, res, next) => {
    const { address, city, state, country, lat, lng, name, description, price } = req.body
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

module.exports = router;
