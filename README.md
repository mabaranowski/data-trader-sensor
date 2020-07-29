# data-trader-sensor

## Description
This project is a mockup of sensors and devices in the form of REST API. 
The purpose is to simulate network-enabled devices that can be called from a client app.
For example, it can be deployed on a *Raspberry Pi* to imitate sensors callable from the local network.

It is a part of **Data Trader** project:
- For a **client-side**, go to [data-trader-web](https://github.com/mabaranowski/data-trader-web.git)
- For a **server-side**, go to [data-trader-api](https://github.com/mabaranowski/data-trader-api.git)

## Routes
Every sensor/device has two routes:
- **'/'** - endpoint that generates random values in predefined structure
- **'/about'** - endpoint that provides information about the device

## Ports
Sensors:
- **3010** - Temperature sensor
- **3020** - Humidity sensor
- **3030** - Air sensor
- **3040** - Light sensor

Devices:
- **3050** - Smartwatch
- **3060** - Solar panels
- **3070** - Air conditioner
- **3080** - Electric vehicle

## Requirements
- Node.js 13.12.0+
- npm 6.14.4+

## Install
```
$ npm install
```
## Run
```
$ node index.js
```
