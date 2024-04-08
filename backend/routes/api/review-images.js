//holds route paths to /api/review-images
const express = require('express');
const { Op } = require('sequelize');
const { ReviewImage, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();


//authorize user
async function validateUser (req, res, next) {
    //use param image id to look for the image
      const imageId = req.params.imageId;

      const search = await ReviewImage.findByPk(Number(imageId));
      //if there is no image that matches the given imageid from parameter -> throw an error
      if (search === null) {
        const err = new Error();
        err.message = "Review Image couldn't be found";
        err.status = 404;
        return next(err);
      };

      //use the reviewId from review image to pull the owner id to check if it matches with req.user
      const result = await Review.findByPk(Number(search.reviewId))
      //if it does match -> continue on to next function
      if (req.user.id === result.userId) {
        return next()
      }
      //else throw an authorization error
      const err = new Error('Forbidden');
      err.title = 'Authorization required';
      err.status = 403;
      return next(err);
    };

//delete an image from a review
router.delete('/:imageId', requireAuth, validateUser, async (req, res) => {
    //use param spot id to look for the spot
    const imageId = req.params.imageId;
    console.log(imageId)
    await ReviewImage.destroy({
      where: {id: Number(imageId)}
    });
    return res.json(
    {
      message:"Successfully deleted"
    });
  });

  module.exports = router;
