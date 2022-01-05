const express = require('express')
route = express.Router()
const processController = require('../controllers/process');
const seguridad = require('../middleware/seguridad');

route
    .get('/process/:ID', processController.get)
    .get('/process', processController.getAll)
    .post('/process', processController.create)
    .put("/process/:ID", processController.update)
    .delete("/process/:ID", processController.deleteProcess)

module.exports = route;

