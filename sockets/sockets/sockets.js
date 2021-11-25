'use strict'
var users = 0;
let numServer = process.env.SERVER;


const moment = require('moment');
const axios = require('axios');
const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require('constants');
const redis = require('socket.io-redis');
const { Socket } = require('dgram');
var socketGlo;

module.exports = {
	startSocketServer:function(server){
		let io = require('socket.io')(server,
		    {
				transports: ['websocket', 'polling'],
				path: '/sockets/io',
				serveClient: true,
		        allowUpgrades: false,
		        pingInterval: 25000, // default - 25000
		        pingTimeout: 60000, // default - 60000
		    }
		);

		io.adapter(redis({ host: 'redis', port: 6379 }));
		io.on('connection', (socket) => {
			socketGlo = socket;
			users++;
			var onTime = moment().toDate();
		    console.log(`[💻]: User conected : ${socket.id} - [${onTime}] - User: ${users} - Server ${server}`);

			_upgradeStateInFront();

			socket.on('disconnect',()=>{
				users--;
				var offTime = moment().toDate();
				console.log(`[❌]: User conected : ${socket.id} - [${offTime}] - User: ${users} - Server ${server}`);
				_downpgradeStateInFront();
			});
		});

		function _upgradeStateInFront(){
			socketGlo.broadcast.emit('upgrade',{
				users,
				numServer
			});
			console.log();
		};

		function _downpgradeStateInFront(){
			socketGlo.broadcast.emit('downgrade',{
				users,
				numServer
			});
			console.log();
		};

		return io;
	}
};