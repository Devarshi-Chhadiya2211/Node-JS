const Booking = require("../models/Booking");
const Hotel = require("../models/Hotel");
const Flight = require("../models/Flight");

const createBooking = async (req, res) => {
  try {
    const {
      bookingType,
      hotelId,
      flightId,
      checkIn,
      checkOut,
      guests,
      totalPrice,
    } = req.body;

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

    await booking.save();

    // Update availability based on booking type
    if (bookingType === "flight") {
      const flight = await Flight.findById(flightId);
      const seatClass = flight.seatClass;
      flight.seatsAvailable[seatClass] -= guests;
      await flight.save();
    } else if (bookingType === "hotel") {
      const hotel = await Hotel.findById(hotelId);
      const room = hotel.rooms.find(
        (r) => r.roomType === booking.roomDetails.roomType
      );
      room.available = false;
      await hotel.save();
    }

    res.status(201).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getUserBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id })
      .populate("flight")
      .populate("hotel");

    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const cancelBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);

    if (!booking) {
      return res.status(404).json({
        success: false,
        error: "Booking not found",
      });
    }

    booking.bookingStatus = "cancelled";
    await booking.save();

    // Update availability based on booking type
    if (booking.bookingType === "flight") {
      const flight = await Flight.findById(booking.flight);
      const seatClass = booking.seatClass;
      flight.seatsAvailable[seatClass] += booking.guests;
      await flight.save();
    } else if (booking.bookingType === "hotel") {
      const hotel = await Hotel.findById(booking.hotel);
      const room = hotel.rooms.find(
        (r) => r.roomType === booking.roomDetails.roomType
      );
      room.available = true;
      await hotel.save();
    }

    res.status(200).json({
      success: true,
      data: booking,
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message,
    });
  }
};

const getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user._id });
    res.status(200).json({
      success: true,
      data: bookings,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

// Get booking by ID
const getBookingById = async (req, res) => {
  const { id } = req.params;
  try {
    const booking = await Booking.findById(id)
      .populate("hotel")
      .populate("flight");
    if (!booking) {
      return res.status(404).json({ message: "Booking not found" });
    }
    res.json(booking);
  } catch (error) {
    res.status(500).json({ message: "Error fetching booking", error });
  }
};

module.exports = {
  createBooking,
  getUserBookings,
  cancelBooking,
  getBookings,
  getBookingById,
};