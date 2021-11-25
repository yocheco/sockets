'use strict'

const bcrypt = require('bcrypt-nodejs');
const responseJson = require('../helper/responseJson');
const redisio = require('socket.io-emitter')({ host: 'redis', port: 6379 });

//Ya no necesitamos pasar la variable io
function index(req,res,io){
    //io.emit('url',1);
    redisio.emit('url',1);
    return responseJson.ok(res, 200, 'Se envio la notificaion al servisor', null);
}

module.exports = {
    index,
}