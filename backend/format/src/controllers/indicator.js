const indicatorModel = require('../models/indicator');

const get = async (req, res) => {
    try {
        const indicator = await indicatorModel.get(req.params.ID);
        return res.status(200).json({ message: "List indicator", data: indicator, err: false });

    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const getAll = async (req, res) => {
    try {
        const indicator = await indicatorModel.getAll();
        return res.status(200).json({ message: "List indicator", data: indicator, err: false });

    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const indicator = await indicatorModel.create(req.body);
        return res.status(200).json({ message: "create indicator", data: indicator, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const indicator = await indicatorModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update indicator", data: indicator, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deleteindicator = async (req, res) => {
    try {
        const indicator = await indicatorModel.deleteindicator(req.params.ID);
        return res.status(200).json({ message: "delete indicator", data: indicator, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }

}


module.exports = { get, getAll, create, update, deleteindicator }