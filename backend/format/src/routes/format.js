const express = require('express')
route = express.Router()
const formatController = require('../controllers/format');

route
    .get('/format/:ID', formatController.get)
    .get('/format', formatController.getAll)
    .post('/format', formatController.create)
    .put("/format/:ID", formatController.update)
    .put("/statusFormat/:ID", formatController.statusFormat)
    .delete("/format/:ID", formatController.deleteformat)
    .get("/duplicateFormat/:ID", formatController.duplicateFormat)
    .get("/getAllProcess/:ID", formatController.getAllProcess)

module.exports = route;
