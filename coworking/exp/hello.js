const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('Hi');
}).listen(3000, () => {
    console.log('hell yeah');
})