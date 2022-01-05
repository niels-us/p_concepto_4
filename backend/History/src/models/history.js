const historyEntity = require('../entity/history')

const getAll = async () => {
    const history = await historyEntity.find()
    return history
}

const create = async (data) => {
    const history = await historyEntity.create(data)
    return history
}

const update = async (id, data) => {
    const history = await historyEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return history
}

const deletehistory = async (id) => {
    const history = await historyEntity.deleteOne({ _id: id })
    return history
}

module.exports = { getAll, create, update, deletehistory }