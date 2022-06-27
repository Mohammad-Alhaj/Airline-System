'use strict';
const events = require('../events');
const { faker } = require('@faker-js/faker');
// require('./pilot');


let id = faker.datatype.uuid();
let time  =  faker.date.past();
let firstNames =  faker.name.firstName();
let destination = faker.address.city()
setInterval(()=>{
    console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>");
    
    console.log(`Manager: new flight with ID: ;${id}; has been scheduled.`);
    var details = {
        event: 'new-flight',
        time:time,
        Details:{
            airLine: 'Royal Jordanian Airlines',
            flightID: id ,
            pilot:firstNames,
            destination: destination
        } 
        
    }
    events.emit('New flight',details)
    
},10000)

setTimeout(() => {
    events.on('arrived',(payload)=>{
        console.log(`we’re greatly thankful for the amazing flight, ${payload.Details.pilot}`);
    })
}, 8000);


