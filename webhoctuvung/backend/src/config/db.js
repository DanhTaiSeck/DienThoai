const mysql = require('mysql2');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '', // Điền mật khẩu nếu có
    database: 'vocabulary'
});

// Kiểm tra kết nối
db.connect((err) => {
    if (err) {
        console.error('❌ Lỗi kết nối CSDL:', err.message);
    } else {
        console.log('✅ Kết nối CSDL thành công!');
    }
});

module.exports = db;
