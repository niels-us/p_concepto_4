const formatDownloadHistoryModel = require('../models/formatDownloadHistory');

const getAll = async (req, res) => {
    try {
        const formatDownloadHistory = await formatDownloadHistoryModel.getAll();
        return res.status(200).json({ message: "List formatDownloadHistory", data: formatDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const formatDownloadHistory = await formatDownloadHistoryModel.create(req.body);
        return res.status(200).json({ message: "create formatDownloadHistory", data: formatDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const formatDownloadHistory = await formatDownloadHistoryModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update formatDownloadHistory", data: formatDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteFormatDownloadHistory = async (req, res) => {
    try {
        const formatDownloadHistory = await formatDownloadHistoryModel.deleteFormatDownloadHistory(req.params.ID);
        return res.status(200).json({ message: "delete formatDownloadHistory", data: formatDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deleteFormatDownloadHistory }