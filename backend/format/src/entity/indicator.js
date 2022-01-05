const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const indicatorSchema = new Schema(
    {
        formatId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        mVerificationId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        observation: {
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

module.exports = mongoose.model('indicator', indicatorSchema);