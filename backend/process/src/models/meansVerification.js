const meansVerificationEntity = require('../entity/meansVerification')

const getAll = async () => {
    const meansVerification = await meansVerificationEntity.find()
    return meansVerification
}

const create = async (data) => {
    const meansVerification = await meansVerificationEntity.create(data)
    return meansVerification
}

const update = async (id, data) => {
    const meansVerification = await meansVerificationEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return meansVerification
}

const deletemeansVerification = async (id) => {
    const meansVerification = await meansVerificationEntity.deleteOne({ _id: id })
    return meansVerification
}

module.exports = { getAll, create, update, deletemeansVerification }