const Flight = require('../models/Flight');

// Create new flight (Admin only)
exports.createFlight = async (req, res) => {
  try {
    const flight = await Flight.create(req.body);
    res.status(201).json({
      success: true,
      data: flight
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Search flights
exports.searchFlights = async (req, res) => {
  try {
    const {
      departureCity,
      arrivalCity,
      departureDate,
      seatClass
    } = req.query;

    let query = {};

    if (departureCity) {
      query['departure.city'] = departureCity;
    }
    if (arrivalCity) {
      query['arrival.city'] = arrivalCity;
    }
    if (departureDate) {
      const date = new Date(departureDate);
      query['departure.date'] = {
        $gte: date,
        $lt: new Date(date.setDate(date.getDate() + 1))
      };
    }
    if (seatClass) {
      query[`seatsAvailable.${seatClass}`] = { $gt: 0 };
    }

    const flights = await Flight.find(query);
    res.status(200).json({
      success: true,
      count: flights.length,
      data: flights
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Update flight status
exports.updateFlightStatus = async (req, res) => {
  try {
    const { status } = req.body;
    const flight = await Flight.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );

    if (!flight) {
      return res.status(404).json({
        success: false,
        error: 'Flight not found'
      });
    }

    res.status(200).json({
      success: true,
      data: flight
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
}; 