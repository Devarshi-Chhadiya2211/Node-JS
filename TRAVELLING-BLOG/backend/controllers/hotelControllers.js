const Hotel = require('../models/Hotel');

// Create new hotel (Admin only)
const createHotel = async (req, res) => {
  try {
    const hotel = await Hotel.create(req.body);
    res.status(201).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get all hotels with filters
const getHotels = async (req, res) => {
  try {
    const { city, minPrice, maxPrice } = req.query;
    let query = {};

    if (city) {
      query['location.city'] = { $regex: city, $options: 'i' };
    }
    if (minPrice || maxPrice) {
      query['priceRange.min'] = { $gte: minPrice || 0 };
      if (maxPrice) {
        query['priceRange.max'] = { $lte: maxPrice };
      }
    }

    const hotels = await Hotel.find(query);
    
    // Ensure we're sending an array in the response
    res.status(200).json({
      success: true,
      count: hotels.length,
      data: hotels || [] // Ensure we always send an array
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Add review to hotel
const addHotelReview = async (req, res) => {
  try {
    const { rating, comment } = req.body;
    const hotel = await Hotel.findById(req.params.id);

    if (!hotel) {
      return res.status(404).json({
        success: false,
        error: 'Hotel not found'
      });
    }

    const review = {
      user: req.user._id,
      rating,
      comment
    };

    hotel.reviews.push(review);

    // Update average rating
    const avg = hotel.reviews.reduce((acc, item) => item.rating + acc, 0) / hotel.reviews.length;
    hotel.rating = avg;

    await hotel.save();

    res.status(201).json({
      success: true,
      data: hotel
    });
  } catch (error) {
    res.status(400).json({
      success: false,
      error: error.message
    });
  }
};

// Get hotel by ID
const getHotelById = async (req, res) => {
    const { id } = req.params;
    try {
        const hotel = await Hotel.findById(id);
        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }
        res.json(hotel);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching hotel', error });
    }
};

// Ensure all functions are exported correctly
module.exports = { createHotel, getHotels, addHotelReview, getHotelById }; 