'use strict'

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate-v2');
const dataCourses = require('../data/courses');

const Schema = mongoose.Schema;

var EmailSchema = Schema({
    name : String,
    email :{ type : String , unique : true, required : true, dropDups: true },
    estado: Boolean,
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
    },
    active : Boolean
});
EmailSchema.plugin(mongoosePaginate);

module.exports = mongoose.model('Email', EmailSchema);