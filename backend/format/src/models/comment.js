const comentaryEntity = require('../entity/comment')

const getAll = async (query)=>{
    const comentaries = await comentaryEntity.find(query).exec();
    return comentaries
}

const getAsc = async (area, limit)=>{
    const comentaries = await comentaryEntity.find({transmitter_area: area}).sort({date_created: 1}).limit(limit)
    return comentaries
}

const create = async (data)=>{
    const comentaries = await comentaryEntity.create(data)
    return comentaries
}

const deleteComentary = async (id)=>{
    const comentaries = await comentaryEntity.deleteOne({_id: id})
    return comentaries
}

module.exports = {getAll, create, deleteComentary, getAsc}