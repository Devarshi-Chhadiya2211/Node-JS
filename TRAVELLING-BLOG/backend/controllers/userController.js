const User = require('../models/User');

const getUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id).select('-password');
  res.json(user);
};

const updateUserProfile = async (req, res) => {
  const user = await User.findById(req.user._id);
  user.name = req.body.name || user.name;
  user.email = req.body.email || user.email;
  if (req.body.password) {
    user.password = req.body.password;
  }
  await user.save();
  res.json({ message: 'Profile updated' });
};

module.exports = { getUserProfile, updateUserProfile }; 