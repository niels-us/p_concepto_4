const formatActivityRegisterEntity = require('../entity/formatActivityRegister')

const getAll = async () => {
    const formatActivityRegister = await formatActivityRegisterEntity.find()
    return formatActivityRegister
}

const create = async (data) => {
    const formatActivityRegister = await formatActivityRegisterEntity.create(data)
    return formatActivityRegister
}

const update = async (id, data) => {
    const formatActivityRegister = await formatActivityRegisterEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return formatActivityRegister
}

const deleteFormatActivityRegister = async (id) => {
    const formatActivityRegister = await formatActivityRegisterEntity.deleteOne({ _id: id })
    return formatActivityRegister
}

module.exports = { getAll, create, update, deleteFormatActivityRegister }