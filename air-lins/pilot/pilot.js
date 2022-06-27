'use strict';
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const ioClient = require('socket.io-client');
// let host = `http://localhost:${process.env.PORT}/`;
let host = `http://localhost:${process.env.PORT}/airline`;

// const socket = ioClient.connect(host)
const sockets = ioClient.connect(host)







sockets.on('New flight',takeOff)




function takeOff(payload) {
    setTimeout(() => {
        payload.event = "flight took-off";
        payload.time = new Date();
        console.log(`flight with ID ${payload.Details.flightID} took-off`);
        sockets.emit('flight took-off', payload)
    }, 4000);
}
sockets.on('New flight',arrived)
    function arrived(payload) {
        setTimeout(() => {
            payload.event = "arrived";
            payload.time = new Date();
            console.log(`Pilot: flight with ID ${payload.Details.flightID} has arrived`);
            sockets.emit('arrived', payload)
            
        }, 7000);
    }
    