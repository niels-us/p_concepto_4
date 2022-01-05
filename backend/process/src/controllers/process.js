const processModel = require('../models/process');

const get = async (req, res) => {
    try {
        const process = await processModel.get(req.params.ID);
        return res.status(200).json({ message: "List process", data: process, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAll = async (req, res) => {
    try {
        const process = await processModel.getAll();
        return res.status(200).json({ message: "List process", data: process, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    // if (req.usuario.data.Rol == 'super administrador') {
        try {
            const process = await processModel.create(req.body);
            return res.status(200).json({ message: "create process", data: process, err: false });
        } catch (error) {
            return res.status(400).json({ message: error, data: null, err: true });
        }
    // } else {
        // return res.status(400).json({ message: "Usuario no autorizado", data: null, err: true });
    // }
}

const update = async (req, res) => {
    try {
        const process = await processModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update process", data: process, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteProcess = async (req, res) => {
    try {
        const process = await processModel.deleteProcess(req.params.ID);
        return res.status(200).json({ message: "delete process", data: process, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { get, getAll, create, update, deleteProcess }