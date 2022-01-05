const processActivityRegisterEntity = require('../entity/processActivityRegister')
const mongoose = require('mongoose');

const getAll = async () => {
    const processActivityRegister = await processActivityRegisterEntity.find()
    return processActivityRegister
}

const getAllProcess = async (id) => {
    const ID = mongoose.Types.ObjectId(id)
    console.log();
    const processActivityRegister = await processActivityRegisterEntity.aggregate([{ $match: { "processId": ID } }])
    return processActivityRegister
}

const create = async (data) => {
    const processActivityRegister = await processActivityRegisterEntity.create(data)
    return processActivityRegister
}

const update = async (id, data) => {
    const processActivityRegister = await processActivityRegisterEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return processActivityRegister
}

const deleteprocessActivityRegister = async (id) => {
    const processActivityRegister = await processActivityRegisterEntity.deleteOne({ _id: id })
    return processActivityRegister
}

module.exports = { getAll, create, update, deleteprocessActivityRegister, getAllProcess }