const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');

const startupTime = Date.now();

router.get('/', async (req, res) => {
    res.send({
        unit: 'percent',
        value: calculate.randomBetween(80, 88),
        time: Date.now()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'humidity',
        ip: '127.0.0.1',
        port: 3020,
        mac: 'b8:27:eb:25:5c:a2',
        uptime: (Date.now() - startupTime)
    });
});

module.exports = router;