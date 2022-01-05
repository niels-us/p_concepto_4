const dataEntity = require('../entity/data')

const getAll = async (query) => {
    const data = await dataEntity.find(query).exec()
    return data
}

const create = async (body) => {
    const data = await dataEntity.create(body)
    return data
}

module.exports = { getAll, create }