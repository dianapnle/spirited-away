//holds routes to path /api/reviews
const express = require('express');
const { Op } = require('sequelize');
const { Review, ReviewImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

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
  //use param review id to look for the review
  const reviewId = req.params.reviewId;

  const search = await Review.findByPk(Number(reviewId));
  //if there is no review that matches the given reviewid from parameter -> throw an error
  if (search === null) {
    const err = new Error();
    err.message = "Review couldn't be found";
    err.status = 404;
    return next(err);
  }

return next();
};


router.put("/:reviewId", requireAuth, checkExist, validateReview, async (req, res) => {
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
  return res.json(result)

})

router.post('/:reviewId/images', requireAuth, async (req, res) => {
    const { url, preview } = req.body
    const spotId = req.params.spotId;
    const image = await ReviewImage.create({
      spotId: spotId,
      url: url,
      preview: preview
    })

    return res.json(
    {
      id: image.id,
      url: image.url,
      preview: image.preview
    });
  });


  router.post('/:reviewId', async (req, res) => {

  })



  router.put('/:reviewId', async (req, res) => {

  })







module.exports = router;
