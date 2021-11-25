'use strict'

const express = require('express');
const emitController = require('../controllers/emitController');
const api = express.Router();


module.exports = function (io) {
    api.get('/', (req,res) => emitController.index(req,res,io));
    api.post('/', (req,res) => emitController.index(req,res,io));

    return api;
};


