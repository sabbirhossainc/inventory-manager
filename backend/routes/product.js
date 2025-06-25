const express = require("express");
const Product = require("../models/Product");
const protect = require("../middleware/authMiddleware");
const router = express.Router();

// Apply auth middleware to all routes
router.use(protect);

/**
 * @route   GET /api/products
 * @desc    Get all products
 * @access  Protected
 */
router.get("/", async (req, res) => {
  try {
    const products = await Product.find().sort({ createdAt: -1 });
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   GET /api/products/:id
 * @desc    Get a single product by ID
 * @access  Protected
 */
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found!" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

/**
 * @route   POST /api/products
 * @desc    Create a new product
 * @access  Protected
 */
router.post("/", async (req, res) => {
  try {
    const product = await Product.create(req.body);
    res.status(201).json(product);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route   PUT /api/products/:id
 * @desc    Update a product by ID
 * @access  Protected
 */
router.put("/:id", async (req, res) => {
  try {
    const updated = await Product.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });
    if (!updated) return res.status(404).json({ msg: "Product not found!" });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

/**
 * @route   DELETE /api/products/:id
 * @desc    Delete a product by ID
 * @access  Protected
 */
router.delete("/:id", async (req, res) => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) return res.status(404).json({ msg: "Product not found!" });
    res.json({ msg: "Product deleted!" });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
