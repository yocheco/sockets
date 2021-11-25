'use strict'

require('dotenv').config();
const express = require('express');
const bodyparser = require('body-parser');
const app = express();

//Sokets server
const http = require('http');
const server = http.Server(app);
const socket = require('./sockets/sockets');
const io = socket.startSocketServer(server);

//loading routes
const emitRoutes = require('./routes/emit')(io);

//middlewares
app.use(bodyparser.urlencoded({extended:false}));
app.use(bodyparser.json());

//cors
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
    res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
    next();
});

//routes
app.use('/sockets/emit',emitRoutes);

//Start server in port
let port = process.env.SOCKETPORT;
server.listen(port, () => {console.log(`[✅]: Server socket run in port : ${port}`);});
