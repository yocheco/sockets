'use strict'
module.exports = {
    ok: function(res,status ,message,data){
        return res.status(status).send({
            error: false,
            message : message,
            data : data
        });
    },
    error: function(res,status,message){
        return res.status(status).send({
            error: true,
            message : message
        });
    },
    token: function(res,token,user){
        return res.status(200).send({
            error: false,
            message : 'Token Creado',
            token :token,
            user : user
        });
    },
    pagination: function(res, page, pages, totalItems,nexPage, prevPage, data, message){
        return res.status(200).send({
            error: false,
            page,
            pages,
            nexPage,
            prevPage,
            totalItems,
            message,
            data,
        });
    }
  }