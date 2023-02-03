const express = require('express');
const connectDB = require('./config/db');
const path = require('path');


const app = express();

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/Practice/index.html'));
});

app.listen(3000, console.log('listening on port 3000'));