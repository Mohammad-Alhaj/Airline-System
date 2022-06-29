'use strict';
// const events = require('../events');
require('dotenv').config();
const { faker } = require('@faker-js/faker');
const ioClient = require('socket.io-client');
let host = `http://localhost:${process.env.PORT}`;
const connections = ioClient.connect(host)




let id = faker.datatype.uuid();
let time  =  faker.date.past();
let firstNames =  faker.name.firstName();
let destination = faker.address.city()
// ioClient.on('new',news)


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
connections.emit('New flight',details)

},10000)

// connections.on('added', (payload) => {
//     console.log('Thank you for adding : ', payload, ' to msgQueue.');
//     // socket.disconnect();
// })




