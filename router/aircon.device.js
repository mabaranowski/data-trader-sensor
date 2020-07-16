const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const KalmanFilter = require('kalmanjs');

const startupTime = Date.now();
const filter = new KalmanFilter();

router.get('/', async (req, res) => {
    res.send({
        desc: 'airflow',
        mode: calculate.acMode(),
        value: calculate.randomIntegerBetween(1, 10, filter),
        time: Date.now()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'aircon',
        ip: '127.0.0.1',
        port: 3070,
        mac: 'b8:27:eb:25:5c:b3',
        uptime: (Date.now() - startupTime)
    });
});

module.exports = router;