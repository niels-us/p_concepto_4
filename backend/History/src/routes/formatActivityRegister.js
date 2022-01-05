const express = require('express')
route = express.Router()
const formatActivityRegisterController = require('../controllers/formatActivityRegister');

route
    .get('/formatActivityRegister',formatActivityRegisterController.getAll)
    .post('/formatActivityRegister',formatActivityRegisterController.create)
    .put("/formatActivityRegister/:ID",formatActivityRegisterController.update)
    .delete("/formatActivityRegister/:ID",formatActivityRegisterController.deleteFormatActivityRegister)

module.exports = route;
