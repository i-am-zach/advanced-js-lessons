const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    min: [0, "Price can not be less than 0"],
    required: true,
  },
});

module.exports = mongoose.model("Product", ProductSchema);
