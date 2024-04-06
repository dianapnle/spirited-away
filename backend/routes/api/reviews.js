//holds routes to path /api/reviews
const express = require('express');
const { Op } = require('sequelize');
const { Review, ReviewImage, Spot, SpotImage, User } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');



function dateConverter(value) {
  const convertedDate = new Date(value);
  const currentDay = String(convertedDate.getDate()).padStart(2, "0");
  const currentMonth = String(convertedDate.getMonth() + 1).padStart(2, "0");
  const currentYear = String(convertedDate.getFullYear()).padStart(2, "0");
  const currentHours = String(convertedDate.getHours()).padStart(2, "0");
  const currentMinutes = String(convertedDate.getMinutes()).padStart(2, "0");
  const currentSeconds = String(convertedDate.getSeconds()).padStart(2, "0");

  return `${currentYear}-${currentMonth}-${currentDay} ${currentHours}:${currentMinutes}:${currentSeconds}`;
}
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

async function authorize(req, res, next) {
  const reviewId = req.params.reviewId;
  const search = await Review.findByPk(Number(reviewId));
  //if there is no review that matches the given reviewid from parameter -> throw an error
  if (search === null) {
      const err = new Error();
      err.message = "Review couldn't be found";
      err.status = 404;
      return next(err);
  }

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


///// get all reviews of current user
    router.get('/current', requireAuth, async (req, res) => {
      const reviews = await Review.findAll({
        where: { userId: req.user.id},
        attributes: ['id', 'userId', 'spotId', 'review', 'stars', 'createdAt', 'updatedAt'],
        include: [
          { model: User, attributes: ['id', 'firstName', 'lastName']},
          { model: Spot, attributes: ['id', 'ownerId', 'address', 'city', 'state', 'country', 'lat', 'lng', 'name', 'price'],
            include: { model: SpotImage,
              attributes: ['url'],
              where: {
                preview: true
              },
              required: false}
        },
          { model: ReviewImage, attributes: ['id', 'url']}
        ]
      });

    const modifiedResult = []
    for (const entry of reviews) {
     const modifiedEntry = entry.toJSON();
     //if images for the spot exist then ->
     if (modifiedEntry.Spot.SpotImages.length !== 0) {
       modifiedEntry.Spot.previewImage = modifiedEntry.Spot.SpotImages[0].url
       delete modifiedEntry.Spot.SpotImages;
       modifiedEntry.createdAt = await dateConverter(entry.createdAt);
       modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
       modifiedResult.push(modifiedEntry);
     } else {
       delete modifiedEntry.Spot.SpotImages;
       modifiedEntry.createdAt = await dateConverter(entry.createdAt);
       modifiedEntry.updatedAt = await dateConverter(entry.updatedAt);
     modifiedResult.push(modifiedEntry)
    }
  }
      return res.json({
        Reviews:  modifiedResult
      });
    });




//edit review
router.put("/:reviewId", requireAuth, checkExist, authorize, validateReview, async (req, res) => {
  const { review, stars } = req.body;
  //use param review id to look for the review
  const reviewId = req.params.reviewId;
  let result = await Review.findByPk(Number(reviewId));

   await result.update({
    id: reviewId,
    userId: req.user.id,
    spotId: result.spotId,
    review: review,
    stars: stars
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

router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const reviewId = req.params.reviewId;
  const count = await ReviewImage.count();
  //if there are more than 10 review images, throw an error
  if (count >= 10) {
    const err = new Error()
    err.message = "Maximum number of images for this resource was reached";
    res.status(403);
    return res.json({
      message: err.message
  })
  };

  const { url } = req.body
  const image = await ReviewImage.create({
    reviewId: reviewId,
    url: url,
  })

  return res.json(
  {
    id: image.id,
    url: image.url
  });
});


//delete review
router.delete('/:reviewId', requireAuth, checkExist, async (req, res) => {
      //use param review id to look for the review
      const reviewId = req.params.reviewId;
       await Review.destroy({
         where: {id: reviewId}
          })

      return res.json({
           message:"Successfully deleted"
        });

});





module.exports = router;
