'use strict'
const Visitor =  require('../models/visitor');

module.exports = {
    saveVisitor: function(socketId,email){
        var visitor = new Visitor();
        visitor.socket = socketId;
        visitor.email = email;

        return new Promise((resolve,reject)=>{
            visitor.save((err,visitor)=>{
                if(err) reject(err);
                if(visitor)resolve(visitor);
            });
        });
    },
    removeVisitor: function(socketId){
        return new Promise((resolve,reject)=>{
            Visitor.findOneAndDelete({socket:socketId},(err,visitor)=>{
                if(err) reject(err);
                if(visitor)resolve(visitor);
            });
        });
    },
    countVisitor:function(){
        return new Promise((resolve,reject)=>{
            Visitor.countDocuments((err,count)=>{
                if(err) reject(err);
                if(count)resolve(count);
            });
        });
    }
}