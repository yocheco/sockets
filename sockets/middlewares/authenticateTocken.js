'use strict'
const jwt = require('jwt-simple');
const moment = require('moment');
const responseJson = require('../helper/responseJson');
const secret = process.env.SECRET_TOKEN;

exports.ensureAuth = function(req, res, next){
    if(!req.headers.authorization )
        return responseJson.error(res,401,'Tienes que enviar el TOKEN en la cabecera authorization');

    let tocken = req.headers.authorization.replace(/['"]+/g,'');
    try{
        const payload = jwt.decode(tocken, secret);
        if(payload.exp <= moment().unix()) return responseJson.error(res,401,'Token caducado, inicia sesion de nuevo');
        req.user = payload;
    }catch(ex){
        return responseJson.error(res,401,'[🤖] authenticationTocken ' + ex);
    }
    next();
}