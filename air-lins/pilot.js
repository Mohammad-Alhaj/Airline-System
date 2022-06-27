'use strict';
const events = require('../events');






events.on('New flight',takeOff)
events.on('New flight',arrived)


 

    function takeOff(payload) {
        setTimeout(() => {
            payload.event = "flight took-off";
            payload.time = new Date();
            console.log(`flight with ID ${payload.Details.flightID} took-off`);
            events.emit('flight took-off', payload)
        }, 4000);
    }
    function arrived(payload) {
        setTimeout(() => {
            payload.event = "arrived";
            payload.time = new Date();
            console.log(`Pilot: flight with ID ${payload.Details.flightID} has arrived`);
            events.emit('arrived', payload)
        }, 7000);
    }
    