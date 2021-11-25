'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = process.env.SECRET_TOKEN;

exports.createToken =  function(user){
    let payload = {
        sub: user._id,
        name: user.name,
        email: user.email,
        iat: moment().unix(),
        exp: moment().add(30,'days').unix(),
    };

    return jwt.encode(payload,secret);
}