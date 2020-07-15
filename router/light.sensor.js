const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const KalmanFilter = require('kalmanjs');

const startupTime = Date.now();
const filter = new KalmanFilter();

router.get('/', async (req, res) => {
    res.send({
        color: calculate.randomColor(),
        value: calculate.randomIntegerBetweenLevels(0, 10),
        time: Date.now()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'light',
        ip: '127.0.0.1',
        port: 3040,
        mac: 'b8:27:eb:25:5c:a4',
        uptime: (Date.now() - startupTime)
    });
});

module.exports = router;