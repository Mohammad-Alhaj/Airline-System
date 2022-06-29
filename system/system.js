'use strict';
require('dotenv').config();
const uuid = require('uuid').v4
const PORT = process.env.PORT;
const io = require('socket.io')(PORT);
const airLineConnection = io.of('/airline');
// const messageQueue = io.of('/pilot');
const id = uuid();

const messageQ ={
    newFlights:{

    }
}

// airLineConnection.on('connection',(socket)=>{
//     console.log('manager is adding new flight');
//     socket.on('New flight',payload)

//     messageQ.newFlights[id]=payload
//     socket.emit('added',payload)
//     airLineConnection.emit('New flight',{
//         id:id,
//         payload:messageQ.newFlights
//     })
    
//     socket.on('get_all', () => {
//         console.log('get all flights');
        
//         Object.keys(messageQ.newFlights).forEach((id) => {
//             socket.emit('flight', {
//                 id: id,
//                 payload: msgQueue.tasks[id]
//             })
//         })
//     })
    
//     socket.on('received', (flight) => {
//         //this will remove the task from the msgQueue
//         delete messageQ.newFlights[newFlights.id];
//         console.log('flight done and deleted');
//     })
// })
    
//................................................................
io.on('connection', (socket) => {
    console.log('global connection', socket.id);
    socket.on('New flight', (payload) => {
        console.log('Flight ', payload);
        messageQ.newFlights[id]=payload

    airLineConnection.emit('New flight',{
        id:id,
        payload:messageQ.newFlights
    })
    });

airLineConnection.on('connection', (socket) => {
    console.log('airline connection', socket.id);
    // socket.on('New flight', (payload) => {
    //     console.log('Flight ', payload);
        // airLineConnection.emit('New flight', payload)
    // });
    socket.on('get_all', () => {
                console.log('get all flights');
                
                Object.keys(messageQ.newFlights).forEach((id) => {
                    socket.emit('flight', {
                        id: id,
                        payload: messageQ.newFlights[id]
                    })
                })
            })
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
});
