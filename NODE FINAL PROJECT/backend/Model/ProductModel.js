const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema(
  {
    title: { type: String },
    description: { type: String },
    image: { type: String },
    category: { type: String },
    price : {type: String},
    userId: { type: mongoose.Types.ObjectId, require: true, ref: "users" },
  },
  {
    versionKey: false,
  }
);

const ProductModel = mongoose.model("product", ProductSchema);

module.exports = ProductModel;