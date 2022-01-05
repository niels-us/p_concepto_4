const express = require('express')
const route = express.Router()
const controller = require('../controllers/fieldAdditional')

route
    .get('/additional',controller.getAll)
    .post('/additional', controller.create)

module.exports = route