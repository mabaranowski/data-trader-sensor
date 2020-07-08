const express = require('express');
const cors = require('cors');
const tempSensor = require('./router/temperature.sensor');
const humiSensor = require('./router/humidity.sensor');

function createServer(sensor, port) {
    const srv = express();
    srv.use(cors());
    srv.use('/api', sensor);
    srv.listen(port, () => console.log(`Listening on port ${port}..`));
};

createServer(tempSensor, 3010);
createServer(humiSensor, 3020);