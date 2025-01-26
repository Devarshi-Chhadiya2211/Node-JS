const express = require("express")
const Booking = require("../models/Booking")
const { protect } = require("../middleware/authMiddleware")

const router = express.Router()

router.post("/", protect, async (req, res) => {
  try {
    const { type, destination, startDate, endDate } = req.body
    const booking = await Booking.create({
      user: req.user.id,
      type,
      destination,
      startDate,
      endDate,
    })
    res.status(201).json(booking)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

router.get("/", protect, async (req, res) => {
  try {
    const bookings = await Booking.find({ user: req.user.id })
    res.json(bookings)
  } catch (error) {
    res.status(400).json({ message: error.message })
  }
})

module.exports = router

