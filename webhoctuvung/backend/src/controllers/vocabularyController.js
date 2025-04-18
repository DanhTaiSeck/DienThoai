const db = require('../config/db');

// 🔹 Lấy tất cả từ vựng
exports.getAllVocabulary = (req, res) => {
    db.query('SELECT * FROM vocabulary', (err, results) => {
        if (err) {
            console.error('❌ Lỗi truy vấn:', err.message);
            res.status(500).json({ error: 'Lỗi khi truy vấn dữ liệu' });
        } else {
            res.json(results);
        }
    });
};

// 🔹 Thêm từ vựng mới
exports.addVocabulary = (req, res) => {
    const { word, meaning } = req.body;
    if (!word || !meaning) {
        return res.status(400).json({ error: 'Thiếu dữ liệu từ vựng' });
    }

    db.query(
        'INSERT INTO vocabulary (word, meaning) VALUES (?, ?)',
        [word, meaning],
        (err, result) => {
            if (err) {
                console.error('❌ Lỗi thêm từ vựng:', err.message);
                res.status(500).json({ error: 'Lỗi khi thêm dữ liệu' });
            } else {
                res.status(201).json({ id: result.insertId, word, meaning });
            }
        }
    );
};

// 🔹 Cập nhật từ vựng
exports.updateVocabulary = (req, res) => {
    const { id } = req.params;
    const { word, meaning } = req.body;
    if (!word || !meaning) {
        return res.status(400).json({ error: 'Thiếu dữ liệu cập nhật' });
    }

    db.query(
        'UPDATE vocabulary SET word = ?, meaning = ? WHERE id = ?',
        [word, meaning, id],
        (err, result) => {
            if (err) {
                console.error('❌ Lỗi cập nhật từ vựng:', err.message);
                res.status(500).json({ error: 'Lỗi khi cập nhật dữ liệu' });
            } else {
                res.status(200).json({ message: 'Cập nhật thành công!' });
            }
        }
    );
};

// 🔹 Xóa từ vựng
exports.deleteVocabulary = (req, res) => {
    const { id } = req.params;

    db.query('DELETE FROM vocabulary WHERE id = ?', [id], (err, result) => {
        if (err) {
            console.error('❌ Lỗi xóa từ vựng:', err.message);
            res.status(500).json({ error: 'Lỗi khi xóa dữ liệu' });
        } else {
            res.status(200).json({ message: 'Xóa thành công!' });
        }
    });
};
