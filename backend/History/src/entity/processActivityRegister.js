const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const processActivityRegisterSchema = new Schema(
    {
        processId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        action: {
            type: String,
            required: true
        },
        userId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        dateTime: {
            type: Date,
            required: true
        },
        status: {
            type: String,
            required: true,
            trim: true,
        },
        reason: {
            type: String,
            required: true,
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

module.exports = mongoose.model('processActivityRegister', processActivityRegisterSchema);