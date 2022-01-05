const historyModel = require('../models/history');

const getAll = async (req, res) => {
    try {
        const history = await historyModel.getAll();
        return res.status(200).json({ message: "List history", data: history, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const history = await historyModel.create(req.body);
        return res.status(200).json({ message: "create history", data: history, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const history = await historyModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update history", data: history, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deletehistory = async (req, res) => {
    try {
        const history = await historyModel.deletehistory(req.params.ID);
        return res.status(200).json({ message: "delete history", data: history, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deletehistory }