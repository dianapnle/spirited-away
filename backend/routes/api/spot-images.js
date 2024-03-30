//holds route paths to /api/spot-images
const express = require('express');
const { Op } = require('sequelize');
const { SpotImage } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();

//authorize user
async function validateUser (req, res, next) {
    //use param image id to look for the image
      const imageId = req.params.imageId;

      const search = await SpotImage.findByPk(Number(imageId));
      //if there is no image that matches the given imageid from parameter -> throw an error
      if (search === null) {
        const err = new Error();
        err.message = "Spot Image couldn't be found";
        err.status = 404;
        return next(err);
      };

      //authorize
      if (req.user.id === search.ownerId) {
        return next()
      }
      const err = new Error('Authorization required');
      err.title = 'Authorization required';
      err.errors = { message: 'Authorization required' };
      err.status = 403;
      return next(err);
    };

//delete an image from a spot
router.delete('/:imageId', requireAuth, validateUser, async (req, res) => {
    //use param spot id to look for the spot
    const imageId = req.params.imageId;
    console.log(imageId)
    await SpotImage.destroy({
      where: {id: Number(imageId)}
    });
    return res.json(
    {
      message:"Successfully deleted"
    });
  });


  module.exports = router;
