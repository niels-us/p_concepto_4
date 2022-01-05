const express = require('express')
route = express.Router()
const formatDownloadHistoryController = require('../controllers/formatDownloadHistory');

route
    .get('/formatDownloadHistory', formatDownloadHistoryController.getAll)
    .post('/formatDownloadHistory', formatDownloadHistoryController.create)
    .put("/formatDownloadHistory/:ID", formatDownloadHistoryController.update)
    .delete("/formatDownloadHistory/:ID", formatDownloadHistoryController.deleteFormatDownloadHistory)

module.exports = route;
