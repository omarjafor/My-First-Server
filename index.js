const express = require('express');
const data = require('./data.json');
const app = express();
const port = 5000;

app.get('/', (req, res) => {
    res.send('Hello From My First Server')
})

app.get('/donations', (req, res) => {
    res.send(data);
})

app.get('/data', (req, res) => {
    res.send('More data coming........')
})

app.listen(port, () => {
    console.log(`My first server running on ${port}`);
})