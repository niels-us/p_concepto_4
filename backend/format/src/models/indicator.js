const indicatorEntity = require('../entity/indicator')

const getAll = async () => {
    const indicator = await indicatorEntity.find()
    return indicator
}

const create = async (data) => {
    const indicator = await indicatorEntity.create(data)
    return indicator
}

const update = async (id, data) => {
    const indicator = await indicatorEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return indicator
}

const deleteindicator = async (id) => {
    const indicator = await indicatorEntity.deleteOne({ _id: id })
    return indicator
}

module.exports = { getAll, create, update, deleteindicator }