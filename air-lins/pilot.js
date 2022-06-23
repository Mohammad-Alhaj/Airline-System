'use strict';
const events = require('../events');
const { faker } = require('@faker-js/faker');


// require('./manager')


events.on('New flight',newFlight)

function newFlight(payload){
 

    setInterval(()=>{
        console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
            console.log(`Pilot: flight with ID : ;${payload.Details.flightID}; took-off `);
        let details = {
            event: 'flight took-off',
            time:payload.time,
            Details:{
                airLine: 'Royal Jordanian Airlines',
                flightID: payload.Details.flightID,
                pilot:payload.Details.pilot,
                destination: payload.Details.destination
            } 
            
        }
        events.emit('flight took-off',details)
        
        },4000)

        

setInterval(()=>{
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
        console.log(`Pilot: flight with ID : ;${payload.Details.flightID}; has arrived`);
    let details = {
        event: 'Arrived',
        time:payload.time,
        Details:{
            airLine: 'Royal Jordanian Airlines',
            flightID: payload.Details.flightID,
            pilot:payload.Details.pilot,
            destination: payload.Details.destination
        } 
        
    }
    events.emit('Arrived',details)
    
    },7000)
}

