'use strict'

const jwt = require('jwt-simple');
const moment = require('moment');
const secret = process.env.SECRET_TOKEN;

exports.createToken =  function(email){
    let payload = {
        sub: email._id,
        name: email.name,
        email: email.email,
        course: email.course,
        iat: moment().unix(),
        exp: moment().add(10,'hours').unix(),
        //exp: moment().add(1,'minutes').unix(),
    };

    return jwt.encode(payload,secret);
}