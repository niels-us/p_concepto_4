const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const formatActivityRegisterSchema = new Schema(
    {
        processId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        formatId: {
            type: mongoose.Types.ObjectId,
            required: true
        },
        area: {
            type: String,
            required: true
        },
        percentage: {
            type: Number,
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

module.exports = mongoose.model('formatActivityRegister', formatActivityRegisterSchema);