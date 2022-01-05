const express = require('express')
const route = express.Router()
const controller = require('../controllers/data')
route
    .get('/data', controller.getAll)
    .post('/data', controller.create)

module.exports = route
