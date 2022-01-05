const express = require('express')
route = express.Router()
const processDownloadHistoryController = require('../controllers/processDownloadHistory');

route
    .get('/processDownloadHistory', processDownloadHistoryController.getAll)
    .get('/processDownloadHistory/:ID',processDownloadHistoryController.getAllProcess)
    .post('/processDownloadHistory', processDownloadHistoryController.create)
    .put("/processDownloadHistory/:ID", processDownloadHistoryController.update)
    .delete("/processDownloadHistory/:ID", processDownloadHistoryController.deleteProcessDownloadHistory)

module.exports = route;
