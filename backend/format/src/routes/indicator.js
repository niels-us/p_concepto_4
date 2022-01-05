const express = require('express')
route = express.Router()
const indicatorController = require('../controllers/indicator');

route
    .get('/indicator/:ID', indicatorController.get)
    .get('/indicator', indicatorController.getAll)
    .post('/indicator', indicatorController.create)
    .put("/indicator/:ID", indicatorController.update)
    .delete("/indicator/:ID", indicatorController.deleteindicator)

module.exports = route;
