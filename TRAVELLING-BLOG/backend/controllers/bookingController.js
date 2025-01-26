const Booking = require('../models/Booking');

const createBooking = async (req, res) => {
  try {
    const { bookingType, hotelId, flightId, checkIn, checkOut, guests, totalPrice } = req.body;

    const booking = new Booking({
      user: req.user._id,
      bookingType,
      hotel: hotelId,
      flight: flightId,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    });

    const savedBooking = await booking.save();
    res.status(201).json(savedBooking);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { createBooking }; 