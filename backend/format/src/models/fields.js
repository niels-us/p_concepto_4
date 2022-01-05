const fieldEntity = require('../entity/fields')

const getAll = async (query)=>{
    const field = await fieldEntity.find(query).exec()
    return field
}

const create = async (data) => {
    const field = await fieldEntity.create(data)
    return field
}

module.exports = {getAll, create}