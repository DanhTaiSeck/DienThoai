const express = require('express');
const router = express.Router();
const vocabularyController = require('../controllers/vocabularyController');

// 🔹 API lấy danh sách từ vựng
router.get('/vocabulary', vocabularyController.getAllVocabulary);

// 🔹 API thêm từ vựng
router.post('/vocabulary', vocabularyController.addVocabulary);

// 🔹 API cập nhật từ vựng
router.put('/vocabulary/:id', vocabularyController.updateVocabulary);

// 🔹 API xóa từ vựng
router.delete('/vocabulary/:id', vocabularyController.deleteVocabulary);

module.exports = router;
