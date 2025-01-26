const User = require("../models/User")
const generateToken = require("../utils/generateToken")
const jwt = require("jsonwebtoken")

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select("-password")
  res.json(user)
}

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id)
  user.name = req.body.name || user.name
  user.email = req.body.email || user.email
  if (req.body.password) {
    user.password = req.body.password
  }
  await user.save()
  res.json({ message: "Profile updated" })
}

const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  // Basic validation
  if (!name || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  // Check if user already exists
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    return res.status(400).json({ message: 'User already exists' });
  }

  // Create new user
  const user = new User({ name, email, password });
  await user.save();
  res.status(201).json({ message: 'User registered successfully' });
};

// Login User
const loginUser = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });
  if (user && (await user.matchPassword(password))) {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, { expiresIn: "30d" });
    res.json({ token });
  } else {
    res.status(401).json({ message: "Invalid email or password" });
  }
};

module.exports = {
  getUserProfile,
  updateUserProfile,
  registerUser,
  loginUser
};

