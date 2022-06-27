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

events.on('arrived',arrived);
function arrived(payload){

    console.log('Flight',payload)
}