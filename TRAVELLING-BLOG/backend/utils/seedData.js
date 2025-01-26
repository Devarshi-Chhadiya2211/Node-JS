const mongoose = require('mongoose');
const Hotel = require('../models/Hotel');
const Flight = require('../models/Flight');
const User = require('../models/User');
const Booking = require('../models/Booking');
require('dotenv').config();

const hotels = [
  {
    name: "Luxury Palace Hotel",
    location: {
      city: "Dubai",
      country: "UAE",
      address: "Palm Jumeirah"
    },
    description: "5-star luxury hotel with ocean view",
    images: ["https://via.placeholder.com/300x200?text=Luxury+Palace+Hotel"],
    rooms: [
      {
        roomType: "Deluxe",
        price: 300,
        capacity: 2,
        amenities: ["King bed", "Ocean view", "Mini bar"],
        available: true
      },
      {
        roomType: "Suite",
        price: 500,
        capacity: 4,
        amenities: ["2 King beds", "Ocean view", "Mini bar", "Living room"],
        available: true
      }
    ],
    amenities: ["Swimming pool", "Spa", "Restaurant", "Gym"],
    priceRange: {
      min: 300,
      max: 500
    }
  },
  {
    name: "City Center Hotel",
    location: {
      city: "New York",
      country: "USA",
      address: "Times Square"
    },
    description: "Modern hotel in the heart of Manhattan",
    images: ["https://via.placeholder.com/300x200?text=City+Center+Hotel"],
    rooms: [
      {
        roomType: "Standard",
        price: 200,
        capacity: 2,
        amenities: ["Queen bed", "City view"],
        available: true
      },
      {
        roomType: "Executive",
        price: 350,
        capacity: 2,
        amenities: ["King bed", "City view", "Work desk"],
        available: true
      }
    ],
    amenities: ["Restaurant", "Business Center", "Gym"],
    priceRange: {
      min: 200,
      max: 350
    }
  }
];

const flights = [
  {
    flightNumber: "FL001",
    airline: "Emirates",
    departure: {
      city: "Dubai",
      airport: "DXB International",
      date: new Date("2024-04-20T10:00:00Z")
    },
    arrival: {
      city: "London",
      airport: "Heathrow",
      date: new Date("2024-04-20T14:30:00Z")
    },
    price: {
      economy: 800,
      business: 2500
    },
    seatsAvailable: {
      economy: 100,
      business: 20
    },
    status: "scheduled"
  },
  {
    flightNumber: "FL002",
    airline: "American Airlines",
    departure: {
      city: "New York",
      airport: "JFK International",
      date: new Date("2024-04-21T08:00:00Z")
    },
    arrival: {
      city: "Los Angeles",
      airport: "LAX International",
      date: new Date("2024-04-21T11:00:00Z")
    },
    price: {
      economy: 300,
      business: 900
    },
    seatsAvailable: {
      economy: 150,
      business: 30
    },
    status: "scheduled"
  }
];

const users = [
    {
        name: 'John Doe',
        email: 'john@example.com',
        password: 'password123', // Consider hashing passwords in production
        bookings: []
    },
    {
        name: 'Jane Smith',
        email: 'jane@example.com',
        password: 'password123', // Consider hashing passwords in production
        bookings: []
    }
];

// Improved sample bookings
const bookings = [
    {
        user: mongoose.Types.ObjectId(), // Placeholder, will be updated after user insertion
        flightId: '101',
        hotelId: '201',
        rentalCarId: '301',
        totalAmount: 500,
        bookingType: 'flight',
        date: '2023-12-01',
        status: 'confirmed'
    },
    {
        user: mongoose.Types.ObjectId(), // Placeholder, will be updated after user insertion
        flightId: '102',
        hotelId: '202',
        rentalCarId: '302',
        totalAmount: 300,
        bookingType: 'hotel',
        date: '2023-12-05',
        status: 'pending'
    }
];

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log('Connected to MongoDB');

    // Clear existing data
    await User.deleteMany({});
    await Hotel.deleteMany({});
    await Flight.deleteMany({});
    await Booking.deleteMany({});

    // Insert new data
    const insertedUsers = await User.insertMany(users);
    const insertedHotels = await Hotel.insertMany(hotels);
    const insertedFlights = await Flight.insertMany(flights);

    // Update bookings with actual user IDs
    bookings[0].user = insertedUsers[0]._id; // Assign the first user ID
    bookings[1].user = insertedUsers[1]._id; // Assign the second user ID

    await Booking.insertMany(bookings);

    console.log('Sample data inserted successfully');
    process.exit(0);
  } catch (error) {
    console.error('Error seeding data:', error);
    process.exit(1);
  }
};

seedData();

// Exporting the data
module.exports = { users, bookings }; 