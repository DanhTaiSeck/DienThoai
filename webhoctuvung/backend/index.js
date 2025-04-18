const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', (req, res) => {
  res.send('Server is running ok nè!');
});

app.listen(PORT, () => {
  console.log(`Server chạy trên port ${PORT}`);
});
