const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const historySchema = new Schema(
    {
        processId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        typeProcess: {
            type: String,
            required: true
        }
    },
    {
        timestamps: {
            createdAt: 'createDate',
            updatedAt: 'updateDate'
        },
        versionKey: false
    }
);

module.exports = mongoose.model('history', historySchema);