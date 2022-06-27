'use strict';
require('dotenv').config();
const PORT = process.env.PORT;
const io = require('socket.io')(PORT);
const airLineConnection = io.of('/airline');
io.on('connection', (socket) => {
    console.log('global connection', socket.id);
    socket.on('New flight', (payload) => {
        console.log('Flight ', payload);
        airLineConnection.emit('New flight', payload); 
    });
});
airLineConnection.on('connection', (socket) => {
    console.log('airline connection', socket.id);
    socket.on('New flight', (payload) => {
        console.log('Flight ', payload);
        airLineConnection.emit('New flight', payload)
    });
    socket.on('flight took-off', takeOff);

    function takeOff(payload) {
        console.log('Flight ', payload);
    }
    socket.on('arrived', arrived);
    function arrived(payload) {
        console.log('Flight ', payload);
        io.emit('arrived', payload); 
    }
});