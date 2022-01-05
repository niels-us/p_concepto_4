const express = require('express')
const route = express.Router()
const controller = require('../controllers/comment')

route
    .get('/comment', controller.getAll)
    .post('/comment', controller.create)
    .post('/comment/createDelete', controller.createAndDelete)
    .delete('/comment/:ID', controller.deleteComentary)

module.exports = route