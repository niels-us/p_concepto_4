const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatSchema = new Schema(
    {
        processId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        templateFormatId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        statusFormat: {
            type: String,
            required: true,
            trim: true,
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        percentage: {
            type: Number,
            required: true
        },
        updateUser: {
            type: String,
            required: true
        },
        createUser: {
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

module.exports = mongoose.model('format', formatSchema);
