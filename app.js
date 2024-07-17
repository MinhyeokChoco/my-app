const express = require('express');
const app = express();
const PORT = 3000;

const cors = require('cors');

app.use(cors());

app.get("/", (req, res) => {
    res.send("오리미 화이팅 !!")
})

app.listen(PORT, (req, res) => {
    console.log("서버 대기 상태")
});