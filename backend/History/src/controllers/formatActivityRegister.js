const formatActivityRegisterModel = require('../models/formatActivityRegister');

const getAll = async (req, res) => {
    try {
        const formatActivityRegister = await formatActivityRegisterModel.getAll();
        return res.status(200).json({ message: "List formatActivityRegister", data: formatActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const formatActivityRegister = await formatActivityRegisterModel.create(req.body);
        return res.status(200).json({ message: "create formatActivityRegister", data: formatActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const formatActivityRegister = await formatActivityRegisterModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update formatActivityRegister", data: formatActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteFormatActivityRegister = async (req, res) => {
    try {
        const formatActivityRegister = await formatActivityRegisterModel.deleteFormatActivityRegister(req.params.ID);
        return res.status(200).json({ message: "delete formatActivityRegister", data: formatActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deleteFormatActivityRegister }