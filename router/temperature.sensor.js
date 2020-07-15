const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const KalmanFilter = require('kalmanjs');

const startupTime = Date.now();
const filter = new KalmanFilter();

router.get('/', async (req, res) => {
    res.send({
        unit: 'celsius',
        value: calculate.randomBetween(20, 24, filter),
        time: Date.now()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'temperature',
        ip: '127.0.0.1',
        port: 3010,
        mac: 'b8:27:eb:25:5c:a1',
        uptime: (Date.now() - startupTime)
    });
});

module.exports = router;