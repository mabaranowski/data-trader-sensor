const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');

const startupTime = new Date();

router.get('/', async (req, res) => {
    res.send({
        color: calculate.randomColor(),
        value: calculate.randomIntegerBetweenLevels(0, 10),
        time: new Date()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'light',
        ip: '127.0.0.1',
        port: 3040,
        mac: 'b8:27:eb:25:5c:a4',
        uptime: (new Date() - startupTime)
    });
});

module.exports = router;