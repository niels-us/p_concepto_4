const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatDownloadHistorySchema = new Schema(
    {
        processId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        formatId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        location: {
            type: String,
            required: true,
        },
        reasonDown: {
            type: String,
            required: true
        },
    },
    {
        timestamps: {
            createdAt: 'createDate',
            updatedAt: 'updateDate'
        },
        versionKey: false
    }
);

module.exports = mongoose.model('formatDownloadHistory', formatDownloadHistorySchema);