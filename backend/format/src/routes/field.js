const express = require('express')
const route = express.Router()
const controller = require('../controllers/field')

route
    .get('/fields', controller.getAll)
    .post('/fields', controller.create)

module.exports = route