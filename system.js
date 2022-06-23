'use strict';

const events = require('./events')
require('./air-lins/manager')
require('./air-lins/pilot');


events.on('New flight',newFlight)

function newFlight(payload){
    console.log(`Flight`,  payload)};


//flight took off
events.on('flight took-off',tookOff);

function tookOff(payload){
    console.log('Flight' ,payload);
}

events.on('Arrived',arrived);
function arrived(payload){

    console.log('Flight',payload)
    console.log(`Manager: we're greatly thankful for the amazing flight, ${payload.Details.pilot}`);  
}