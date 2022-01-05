const mongoose = require('mongoose');
const processEntity = require('../entity/process');
const fetch = require('node-fetch');

const get = async (id) => {
    const ID = mongoose.Types.ObjectId(id)

    const format = await fetch('format.localhost/getAllProcess/' + id).then(res => res.json())
    const processactivityregister = await fetch('history.localhost/processActivityRegister/' + id).then(res => res.json())
    const processDownloadHistory = await fetch('history.localhost/processDownloadHistory/' + id).then(res => res.json())

    // const format = await fetch('http://localhost:3001/getAllProcess/' + id).then(res => res.json())
    // const processactivityregister = await fetch('http://localhost:3002/processActivityRegister/' + id).then(res => res.json())
    // const processDownloadHistory = await fetch('http://localhost:3002/processDownloadHistory/' + id).then(res => res.json())
    const processInicial = await processEntity.aggregate([
        { $match: { "_id": ID } },
        { $lookup: { from: "meansverifications", localField: "_id", foreignField: "processId", as: "meansVerifications" } }
    ])
    const process = Object.assign(...processInicial, format, processactivityregister, processDownloadHistory);
    return process

}

const getAll = async () => {
    const process = await processEntity.aggregate([
        { $lookup: { from: "formats", localField: "_id", foreignField: "processId", as: "Formats" } },
        { $lookup: { from: "meansverifications", localField: "_id", foreignField: "processId", as: "meansVerifications" } },
        { $lookup: { from: "processactivityregisters", localField: "_id", foreignField: "processId", as: "processactivityregisters" } },
        { $lookup: { from: "processdownloadhistories", localField: "_id", foreignField: "processId", as: "processDownloadHistory" } }
    ])
    return process
}

const create = async (data) => {
    const process = await processEntity.create(data)
    return process
}

const update = async (id, data) => {
    const process = await processEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return process
}

const deleteProcess = async (id) => {
    const process = await processEntity.deleteOne({ _id: id })
    return process
}

module.exports = { get, getAll, create, update, deleteProcess }