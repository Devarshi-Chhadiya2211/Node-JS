const mongoose  = require("mongoose")

const UserSchema = mongoose.Schema({
blogname: { type: String },
heading: { type: String, require: true },
des: { type: String, require: true },
imgURL: { type: String, require: true },
date: { type: String,},
});
const BLogModel = mongoose.model("BlogData", UserSchema);
module.exports = BLogModel;