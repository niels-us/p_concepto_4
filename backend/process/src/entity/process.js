const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProcessSchema = new Schema(
    {
        name: {
            type: String,
            required: true,
            unique: true
        },
        startDate: {
            type: Date,
            required: true
        },
        endDate: {
            type: Date,
            required: true
        },
        statusProcess: {
            type: String,
            required: true
        },
        typeProcess: {
            type: String,
            required: true
        },
        createdUser: {
            type: String,
            required: true
        },
        updateUser: {
            type: String,
            required: true
        },
        iteration: {
            type: Number,
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

module.exports = mongoose.model('process', ProcessSchema);
