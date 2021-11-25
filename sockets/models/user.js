'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var UserSchema = Schema({
    name : { type : String, required : true},
    email : {type: String, required:true, index: {unique: true, dropDups: true}},
    password :  { type : String, required : true},
    estado: Boolean
});

//ocultar pw en api
UserSchema.methods.toJSON = function() {
    var obj = this.toObject();
    delete obj.password;
    return obj;
}

module.exports = mongoose.model('User', UserSchema);