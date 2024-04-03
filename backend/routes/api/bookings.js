//holds route paths to /api/bookings
const express = require('express');
const { Op } = require('sequelize');
const { Spot } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

//edit booking
router.put("/:bookingId", requireAuth, async (req, res) => {
    const { review, stars } = req.body;
    //use param review id to look for the review
    const reviewId = req.params.reviewId;
    let result = await Review.findByPk(Number(reviewId));

     await result.update({
      id: reviewId,
      userId: req.user.id,
      spotId: result.spotId,
      review: review,
      stars: stars,
      createdAt: result.createdAt,
      updatedAt: result.updatedAt
    })
    return res.json({
      id: result.id,
      userId: result.userId,
      spotId: result.spotId,
      review: review,
      stars: stars,
      createdAt: await dateConverter(result.createdAt),
      updatedAt: await dateConverter(result.updatedAt)
    })

  })


module.exports = router;
