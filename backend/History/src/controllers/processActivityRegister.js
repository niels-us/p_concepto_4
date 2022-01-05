const processActivityRegisterModel = require('../models/processActivityRegister');

const getAll = async (req, res) => {
    try {
        const processActivityRegister = await processActivityRegisterModel.getAll();
        return res.status(200).json({ message: "List processActivityRegister", data: processActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAllProcess = async (req, res) => {
    try {
        const processActivityRegister = await processActivityRegisterModel.getAllProcess(req.params.ID);
        return res.status(200).json({ message: "List processActivityRegister", processActivityRegister: processActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, processActivityRegister: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const processActivityRegister = await processActivityRegisterModel.create(req.body);
        return res.status(200).json({ message: "create processActivityRegister", data: processActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const processActivityRegister = await processActivityRegisterModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update processActivityRegister", data: processActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteprocessActivityRegister = async (req, res) => {
    try {
        const processActivityRegister = await processActivityRegisterModel.deleteprocessActivityRegister(req.params.ID);
        return res.status(200).json({ message: "delete processActivityRegister", data: processActivityRegister, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deleteprocessActivityRegister, getAllProcess }