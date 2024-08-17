const express = require('express');
const Card = require('../models/Card');
const router = express.Router();

// POST /cards - Create a new card
router.post('/cards', async (req, res) => {
  const { title, description } = req.body;
  try {
    const card = new Card({ title, description });
    await card.save();
    res.status(201).json(card);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

// GET /cards - Retrieve all cards
router.get('/cards', async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET /cards/:title - Retrieve a specific card by title
router.get('/cards/:title', async (req, res) => {
  try {
    const card = await Card.findOne({ title: req.params.title });
    if (!card) {
      return res.status(404).json({ message: 'Card not found' });
    }
    res.json(card);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
