const express = require('express');
const port = 3000;
const app = express();

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.get('/style.css', (req, res) => {
    res.sendFile(__dirname + '/style.css')
})

app.get('/images/Khang Logo.png', (req, res) => {
    res.sendFile(__dirname + '/images/Khang Logo.png');
})

app.get('/images', (req, res) => {
    res.sendFile(__dirname + '/images');
})

app.listen(port, () => {
    console.log(`example app listening at http://localhost:${port}`);
});
