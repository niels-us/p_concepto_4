const additionalEntity = require('../entity/fieldAdditional')

const getAll = async (query)=>{
    const additional = await additionalEntity.find(query).exec()
    return additional
}

const create = async (data)=>{
    const additional = await additionalEntity.create(data)
    return additional
}

module.exports = {getAll, create}