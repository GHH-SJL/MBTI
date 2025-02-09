const express = require('express');
const app = express();
const port = 3000;

app.use(express.json());
app.use(express.static('src'));

app.listen(port, () => {
    console.log(`MBTI测试服务器运行在 http://localhost:${port}`);
}); 