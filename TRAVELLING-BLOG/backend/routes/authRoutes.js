const express = require("express")
const { registerUser, loginUser } = require("../controllers/authController")
const { protect } = require("../middleware/authMiddleware")
const User = require("../models/User")

const router = express.Router()

router.post("/register", registerUser)
router.post("/login", loginUser)

// Add the profile route
router.get("/profile", protect, async (req, res) => {
  try {
    const user = await User.findById(req.user._id).select('-password');
    res.json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router

