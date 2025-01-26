const express = require('express');
const router = express.Router();
const { protect, admin } = require('../middleware/authMiddleware');
const {
  addFlight,
  updateFlight,
  deleteFlight,
  getFlights,
  addHotel,
  updateHotel,
  deleteHotel,
  getHotels,
  getAllBookings,
  getAllUsers,
  deleteUser,
} = require('../controllers/adminController');
const User = require('../models/User');
const Booking = require('../models/Booking');
const { getHotelById } = require('../controllers/hotelControllers');

// Flight routes
router.route('/flights')
  .get(protect, admin, getFlights)
  .post(protect, admin, addFlight);

router.route('/flights/:id')
  .put(protect, admin, updateFlight)
  .delete(protect, admin, deleteFlight);

// Hotel routes
router.route('/hotels')
  .get(protect, admin, getHotels)
  .post(protect, admin, addHotel);

router.route('/hotels/:id')
  .put(protect, admin, updateHotel)
  .delete(protect, admin, deleteHotel);

// Route to get hotel by ID
router.get('/hotels/:id', protect, admin, getHotelById);

// Booking management
router.get('/bookings', protect, admin, async (req, res) => {
  try {
    const bookings = await Booking.find({})
      .populate('user', 'name email')
      .populate('flight')
      .populate('hotel');
    res.json({
      success: true,
      data: bookings
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
});

// User management
router.get('/users', protect, admin, getAllUsers);

router.delete('/users/:id', protect, admin, deleteUser);

module.exports = router; 