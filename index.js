const express = require('express');
const cors = require('cors');
const data = require('./data.json');
const app = express();
const port = 5000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello From My First Server')
})

app.get('/donations', (req, res) => {
    res.send(data);
})

app.get('/donations/:id', (req, res) => {
    const id = req.params.id;
    const donation = data.find(donat => donat.id === parseInt(id)) || {};
    res.send(donation);
})

app.get('/data', (req, res) => {
    res.send('More data coming........')
})

app.listen(port, () => {
    console.log(`My first server running on ${port}`);
})