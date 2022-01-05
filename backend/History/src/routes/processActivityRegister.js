const express = require('express')
route = express.Router()
const processActivityRegisterController = require('../controllers/processActivityRegister');

route
    .get('/processActivityRegister',processActivityRegisterController.getAll)
    .get('/processActivityRegister/:ID',processActivityRegisterController.getAllProcess)
    .post('/processActivityRegister',processActivityRegisterController.create)
    .put("/processActivityRegister/:ID",processActivityRegisterController.update)
    .delete("/processActivityRegister/:ID",processActivityRegisterController.deleteprocessActivityRegister)

module.exports = route;
