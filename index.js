const express = require('express');
const cors = require('cors');
const tempSensor = require('./router/temperature.sensor');
const humiSensor = require('./router/humidity.sensor');
const airSensor = require('./router/air.sensor');
const lightSensor = require('./router/light.sensor');

createServer = (port, device) => {
    const srv = express();
    srv.use(cors());
    srv.use('/api', device);
    srv.listen(port, () => console.log(`Listening on port ${port}..`));
};

createServer(3010, tempSensor);
createServer(3020, humiSensor);
createServer(3030, airSensor);
createServer(3040, lightSensor);