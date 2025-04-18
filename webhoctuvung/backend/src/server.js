const express = require('express');
const app = express();
const vocabularyRoutes = require('./routes/vocabularyRoutes');
const cors = require('cors');
const cardRoutes = require('./routes/cardRoutes'); // 👈 Thêm dòng này

// Sử dụng cors cho phép tất cả các nguồn (tùy chỉnh theo yêu cầu)
app.use(cors()); 
app.use(express.json());

app.use(express.json()); // Middleware để parse JSON
app.use('/api', vocabularyRoutes); // Tất cả API nằm trong `/api`
app.use('/api', cardRoutes); // 👈 Đăng ký route mới

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`🚀 Server đang chạy tại http://localhost:${PORT}/api/vocabulary`);
});
