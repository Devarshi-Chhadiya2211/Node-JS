const express = require('express');
const router = express.Router();
const {
  createHotel,
  getHotels,
  addHotelReview,
  getHotelById
} = require('../controllers/hotelControllers');
const { protect, admin } = require('../middleware/authMiddleware');

router.route('/')
  .get(getHotels)
  .post(protect, admin, createHotel);

router.post('/:id/reviews', protect, addHotelReview);

router.get('/:id', protect, getHotelById);

module.exports = router; 