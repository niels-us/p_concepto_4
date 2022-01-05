const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const comentarySchema = new Schema(
    {
        formatId: {
            type: mongoose.Types.ObjectId,
            require: [true, 'El id del formato es necesario']
        },
        areaReception: {
            type: String,
            require: [true, 'El area de recepción es necesario']
        },
        areaEmit: {
            type: String,
            require: [true, 'El area de emisión es necesario']
        },
        comment: {
            type: String,
            require: [true, 'El comentario es necesario']
        },
        dateTime: {
            type: Date,
            require: [true, 'La fecha y hora es necesario'],
            default: new Date()
        },
        status: {
            type: Boolean,
            require: [true, 'El estado es necesario'],
            default: true
        },
        createUser: {
            type: mongoose.Types.ObjectId,
            require: [true, 'El usuario es necesario']
        },
    },
    {
        timestamps: {
            createdAt: 'createDate',
            updatedAt: 'updateDate'
        },
        versionKey: false
    }
)

module.exports = mongoose.model('comment', comentarySchema)