'use strict'

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var QuestionSchema = Schema({
    question : { type : String, required : '{PATH} es obligatio!'},
},{
    timestamps: true
});

module.exports = mongoose.model('Question', QuestionSchema);