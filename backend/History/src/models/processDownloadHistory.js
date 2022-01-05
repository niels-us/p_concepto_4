const processDownloadHistoryEntity = require('../entity/processDownloadHistory')
const mongoose = require('mongoose');

const getAll = async () => {
    const processDownloadHistory = await processDownloadHistoryEntity.find()
    return processDownloadHistory
}


const getAllProcess = async (id) => {
    const ID = mongoose.Types.ObjectId(id)
    const processDownloadHistory = await processDownloadHistoryEntity.aggregate([{ $match: { "processId": ID } }])
    return processDownloadHistory
}

const create = async (data) => {
    const processDownloadHistory = await processDownloadHistoryEntity.create(data)
    return processDownloadHistory
}

const update = async (id, data) => {
    const processDownloadHistory = await processDownloadHistoryEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return processDownloadHistory
}

const deleteprocessDownloadHistory = async (id) => {
    const processDownloadHistory = await processDownloadHistoryEntity.deleteOne({ _id: id })
    return processDownloadHistory
}

module.exports = { getAll, create, update, deleteprocessDownloadHistory, getAllProcess }