//holds route paths to /api/bookings
const express = require('express');
const { Op } = require('sequelize');
const { ReviewImage, Review } = require('../../db/models');
const { requireAuth } = require('../../utils/auth');
const router = express.Router();





module.exports = router;
