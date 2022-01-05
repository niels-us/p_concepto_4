const mongoose = require('mongoose');
const formatEntity = require('../entity/format')

const get = async (id) => {
    const ID = mongoose.Types.ObjectId(id)
    const format = await formatEntity.aggregate([
        { $match: { "_id": ID } },
        { $lookup: { from: "comments", localField: "_id", foreignField: "formatId", as: "comment" } },
        { $lookup: { from: "indicators", localField: "_id", foreignField: "formatId", as: "indicators" } },
        { $lookup: { from: "processactivityregisters", localField: "_id", foreignField: "formatId", as: "processactivityregisters" } },
        { $lookup: { from: "addfields", localField: "_id", foreignField: "formatId", as: "addfield" } },
    ])
    return format
}

const getAll = async () => {    
    const format = await formatEntity.aggregate([
        { $lookup: { from: "comments", localField: "_id", foreignField: "formatId", as: "comment" } },
        { $lookup: { from: "indicators", localField: "_id", foreignField: "formatId", as: "indicators" } },
        { $lookup: { from: "processactivityregisters", localField: "_id", foreignField: "formatId", as: "processactivityregisters" } },
        { $lookup: { from: "addfields", localField: "_id", foreignField: "formatId", as: "addfield" } },
    ])
    return format
}

const getAllProcess = async (id) => {
    const ID = mongoose.Types.ObjectId(id)
    const format = await formatEntity.aggregate([
        { $match: { "processId": ID } },
        { $lookup: { from: "comments", localField: "_id", foreignField: "formatId", as: "comment" } },
        { $lookup: { from: "indicators", localField: "_id", foreignField: "formatId", as: "indicators" } },
        { $lookup: { from: "processactivityregisters", localField: "_id", foreignField: "formatId", as: "processactivityregisters" } },
        { $lookup: { from: "addfields", localField: "_id", foreignField: "formatId", as: "addfield" } },
    ])
    return format
}

const create = async (data) => {
    // db.formats.find({"processId" : ObjectId("61cbb8d2b74bc30b828cab3b")},{"name" :1}).pretty()
    const format = await formatEntity.create(data)
    return format
}

const update = async (id, data) => {
    const format = await formatEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return format
}

const deleteformat = async (id) => {
    const format = await formatEntity.deleteOne({ _id: id })
    return format
}

const duplicateFormat = async (id) => {
    const format = await formatEntity.findOne({ _id: id })
    const newFormat = { ...format._doc }
    newFormat._id = new mongoose.Types.ObjectId();
    newFormat.name = newFormat.name + '_duplicado';
    return newFormat
}

const statusFormat = async (id, data) => {
    const format = await formatEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    console.log(format);
    return format
}

module.exports = { get, getAll, create, update, deleteformat, duplicateFormat, statusFormat, getAllProcess }