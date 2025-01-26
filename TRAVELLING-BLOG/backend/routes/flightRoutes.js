const express = require('express');
const router = express.Router();
const {
  createFlight,
  searchFlights,
  updateFlightStatus
} = require('../controllers/flightControllers');
const { protect, admin } = require('../middleware/authMiddleware');
const { getFlights } = require('../controllers/flightController');

router.route('/')
  .get(getFlights)
  .post(protect, admin, createFlight);

router.patch('/:id/status', protect, admin, updateFlightStatus);

module.exports = router; 