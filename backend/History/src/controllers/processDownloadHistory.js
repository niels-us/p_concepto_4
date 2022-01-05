const processDownloadHistoryModel = require('../models/processDownloadHistory');

const getAll = async (req, res) => {
    try {
        const processDownloadHistory = await processDownloadHistoryModel.getAll();
        return res.status(200).json({ message: "List processDownloadHistory", data: processDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAllProcess = async (req, res) => {    
    try {
        const processDownloadHistory = await processDownloadHistoryModel.getAllProcess(req.params.ID);
        return res.status(200).json({ message: "List processDownloadHistory", processDownloadHistory: processDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, processDownloadHistory: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const processDownloadHistory = await processDownloadHistoryModel.create(req.body);
        return res.status(200).json({ message: "create processDownloadHistory", data: processDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const processDownloadHistory = await processDownloadHistoryModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update processDownloadHistory", data: processDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteProcessDownloadHistory = async (req, res) => {
    try {
        const processDownloadHistory = await processDownloadHistoryModel.deleteprocessDownloadHistory(req.params.ID);
        return res.status(200).json({ message: "delete processDownloadHistory", data: processDownloadHistory, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deleteProcessDownloadHistory, getAllProcess }