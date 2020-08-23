const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');
const xml2js = require('xml2js');

const startupTime = new Date();

router.get('/', async (req, res) => {
    const builder = new xml2js.Builder();
    const xml = builder.buildObject({
        color: calculate.randomColor(),
        value: calculate.randomIntegerBetweenLevels(0, 10),
        time: new Date().toISOString()
    });
    
    res.set('Content-Type', 'application/xml');
    res.send(xml);
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