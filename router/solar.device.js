const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const KalmanFilter = require('kalmanjs');

const startupTime = Date.now();
const filter = new KalmanFilter();

router.get('/', async (req, res) => {
    const output = calculate.randomIntegerBetween(1000, 7000, filter);
    res.send({
        desc: 'output',
        usage: `${calculate.convertPrecentage(output, 7000)}%`,
        unit: 'watt',
        value: output,
        time: Date.now()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'solar',
        ip: '127.0.0.1',
        port: 3060,
        mac: 'b8:27:eb:25:5c:b2',
        uptime: (Date.now() - startupTime)
    });
});

module.exports = router;