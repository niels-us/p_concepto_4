const formatModel = require('../models/format');
const mongoose = require('mongoose');

const get = async (req, res) => {
    try {
        const format = await formatModel.get(req.params.ID);
        return res.status(200).json({ message: "List format", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAll = async (req, res) => {
    try {
        const format = await formatModel.getAll();
        return res.status(200).json({ message: "List format", data: format, err: false });

    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAllProcess = async (req, res) => {
    try {
        const format = await formatModel.getAllProcess(req.params.ID);
        return res.status(200).json({ message: "List format", format: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, format: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const format = await formatModel.create(req.body);
        return res.status(200).json({ message: "create format", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const format = await formatModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update format", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteformat = async (req, res) => {
    try {
        const format = await formatModel.deleteformat(req.params.ID);
        return res.status(200).json({ message: "delete format", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const duplicateFormat = async (req, res) => {
    try {
        const format = await formatModel.duplicateFormat(req.params.ID);
        await formatModel.create(format);
        return res.status(200).json({ message: "duplicate format", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }

}

const statusFormat = async (req, res) => {
    try {
        const format = await formatModel.statusFormat(req.params.ID, req.body);
        return res.status(200).json({ message: "update statusFormat", data: format, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { get, getAll, create, update, deleteformat, duplicateFormat, statusFormat, getAllProcess };