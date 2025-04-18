// routes/cardRoutes.js
const express = require('express');
const router = express.Router();

// Dữ liệu mẫu (sau này có thể lấy từ DB)
const cards = [
    { id: 1, word: "boots", meaning: "giày bốt" },
    { id: 2, word: "jeans", meaning: "quần jean" },
];

// GET /api/cards
router.get('/cards', (req, res) => {
    res.json(cards);
});

module.exports = router;
