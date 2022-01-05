const express = require('express')
route = express.Router()
const meansVerificationController = require('../controllers/meansVerification');

route
    .get('/meansVerification', meansVerificationController.getAll)
    .get('/meansVerification', meansVerificationController.getAll)
    .post('/meansVerification', meansVerificationController.create)
    .put("/meansVerification/:ID", meansVerificationController.update)
    .delete("/meansVerification/:ID", meansVerificationController.deletemeansVerification)

module.exports = route;



