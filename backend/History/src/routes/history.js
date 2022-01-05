const express = require('express')
route = express.Router()
const historyController = require('../controllers/history');

route
    .get('/history',historyController.getAll)
    .post('/history',historyController.create)
    .put("/history/:ID",historyController.update)
    .delete("/history/:ID",historyController.deletehistory)

module.exports = route;
