const express = require ('express');
const app = express();

app.use(express.json());

app.post('/user', (req, res) => {
    res.status(201).send({});
});


module.exports = app;