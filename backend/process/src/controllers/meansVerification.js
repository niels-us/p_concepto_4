const meansVerificationModel = require('../models/meansVerification');


const getAll = async (req, res) => {
    try {
        const meansVerification = await meansVerificationModel.getAll();
        return res.status(200).json({ message: "List meansVerification", data: meansVerification, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const create = async (req, res) => {
    try {
        const meansVerification = await meansVerificationModel.create(req.body);
        return res.status(200).json({ message: "create meansVerification", data: meansVerification, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const update = async (req, res) => {
    try {
        const meansVerification = await meansVerificationModel.update(req.params.ID, req.body);
        return res.status(200).json({ message: "update meansVerification", data: meansVerification, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

const deletemeansVerification = async (req, res) => {
    try {
        const meansVerification = await meansVerificationModel.deletemeansVerification(req.params.ID);
        return res.status(200).json({ message: "delete meansVerification", data: meansVerification, err: false });
    } catch (error) {
        return res.status(400).json({ message: error, data: null, err: true });
    }
}

module.exports = { getAll, create, update, deletemeansVerification }