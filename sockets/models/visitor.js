'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var VisitorSchema = Schema({
    socket : { type : String, required : '{PATH} es obligatio!'},
    email : {type: String, required:true, index: {unique: true, dropDups: true}},
},{
    timestamps: true
});

module.exports = mongoose.model('Visitor', VisitorSchema);