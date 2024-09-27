//holds route paths to /api/spot-images
const express = require("express");
const { Op } = require("sequelize");
const { SpotImage, Spot } = require("../../db/models");
const { requireAuth } = require("../../utils/auth");
const router = express.Router();

//authorize user
async function validateUser(req, res, next) {
  //use param image id to look for the image
  const imageId = req.params.imageId;

  const search = await SpotImage.findByPk(Number(imageId));
  //if there is no image that matches the given imageid from parameter -> throw an error
  if (search === null) {
    const err = new Error();
    err.message = "Spot Image couldn't be found";
    err.status = 404;
    return next(err);
  }

  //use the spotId from spot image to pull the owner id to check if it matches with req.user
  const result = await Spot.findByPk(Number(search.spotId));
  //if it does match -> continue on to next function
  if (req.user.id === result.ownerId) {
    return next();
  }
  //else throw an authorization error
  const err = new Error("Forbidden");
  err.title = "Authorization required";
  err.status = 403;
  return next(err);
}

//delete an image from a spot
router.delete("/:imageId", requireAuth, validateUser, async (req, res) => {
  //use param spot id to look for the spot
  const imageId = req.params.imageId;

  await SpotImage.destroy({
    where: { id: Number(imageId) },
  });
  return res.json({
    message: "Successfully deleted",
  });
});

module.exports = router;
