const express = require("express");
const router = express.Router();
const Product = require("../models/Product");

// GET ALL THE POSTS
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    return res.json(products);
  } catch (err) {
    return res.json({ message: err });
  }
});

// SUBMIT A POST
router.post("/", async (req, res) => {
  const product = new Product({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
  });

  try {
    const result = await product.save();
    res.json(result);
  } catch (err) {
    res.json({ message: err });
  }
});

// SPECIFIC POST
router.get("/:productId", async (req, res) => {
  try {
    const product = await Product.findById(req.params.productId);
    res.json(product);
  } catch (err) {
    res.json({ message: err });
  }
});

// Delete a product
router.delete("/:productId", async (req, res) => {
  try {
    const removedProduct = await Product.remove({ _id: req.params.productId });
    res.json(removedProduct);
  } catch (err) {
    res.json({ message: err });
  }
});

// Update a product
router.patch("/:productId", async (req, res) => {
  try {
    const updatedProduct = await Product.updateOne(
      { _id: req.params.productId },
      { $set: { title: req.body.title } }
    );
    res.json(updatedProduct);
  } catch (err) {
    return res.json({ message: err });
  }
});

module.exports = router;
