const express = require('express');
const router = express.Router();
const calculate = require('../util/calculate');

const startupTime = new Date();
let chargeLevel = 0;
let shouldCharge = true;

router.get('/', async (req, res) => {
    chargeState();
    res.send({
        desc: 'EV charger',
        isFull: chargeLevel > 80 ? true : false,
        unit: 'percent',
        value: chargeLevel,
        time: new Date()
    });
});

router.get('/about', async (req, res) => {
    res.send({
        type: 'vehicle',
        ip: '127.0.0.1',
        port: 3080,
        mac: 'b8:27:eb:25:5c:b4',
        uptime: (new Date() - startupTime)
    });
});

chargeState = () => {
    if(shouldCharge) {
        chargeLevel = calculate.simCharging(chargeLevel);
        shouldCharge = chargeLevel > 90 ? false : true;
    } else {
        chargeLevel = calculate.simDischarging(chargeLevel);
        shouldCharge = chargeLevel < 10 ? true : false;
    }
}

module.exports = router;