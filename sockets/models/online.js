'use strict'

const mongoose = require('mongoose');
const dataCourses = require('../data/courses');

const Schema = mongoose.Schema;

var OnlineSchema = Schema({
    zoom : { type : String , unique : true, required : true, dropDups: true },
    password : { type : String , unique : true, required : true, dropDups: true },
    course :{
        type: String,
        enum : [
            dataCourses.courses.intensivoMatutino,
            dataCourses.courses.intensivoVEspertino,
            dataCourses.courses.repaso,
            dataCourses.courses.sabatino,
            dataCourses.courses.semiIntensivo
        ],
        default: dataCourses.courses.sabatino
    }
});

module.exports = mongoose.model('Online', OnlineSchema);