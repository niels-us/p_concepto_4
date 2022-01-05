const formatDownloadHistoryEntity = require('../entity/formatDownloadHistory')

const getAll = async () => {
    const formatDownloadHistory = await formatDownloadHistoryEntity.find()
    return formatDownloadHistory
}

const create = async (data) => {
    const formatDownloadHistory = await formatDownloadHistoryEntity.create(data)
    return formatDownloadHistory
}

const update = async (id, data) => {
    const formatDownloadHistory = await formatDownloadHistoryEntity.findByIdAndUpdate({ _id: id }, data, { useFindAndModify: false })
    return formatDownloadHistory
}

const deleteFormatDownloadHistory = async (id) => {
    const formatDownloadHistory = await formatDownloadHistoryEntity.deleteOne({ _id: id })
    return formatDownloadHistory
}

module.exports = { getAll, create, update, deleteFormatDownloadHistory }