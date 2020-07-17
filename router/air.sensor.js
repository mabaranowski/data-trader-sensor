const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const KalmanFilter = require('kalmanjs');

const startupTime = new Date();
const filter = new KalmanFilter();

router.get('/', async (req, res) => {
    const value = calculate.randomBetween(30, 70, filter);
    res.send({
        type: 'pm2.5',
        airQualityLevel: calculate.airQuality(value),
        value: value,
        time: new Date()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'air',
        ip: '127.0.0.1',
        port: 3030,
        mac: 'b8:27:eb:25:5c:a3',
        uptime: (new Date() - startupTime)
    });
});

module.exports = router;