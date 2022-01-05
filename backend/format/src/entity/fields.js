const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const fieldsSchema = new Schema({
    id_format: {
        type: ObjectId,
        require: true
    },
    name : {
        type: String,
        require: true
    },
    area : {
        type: String,
        require: true
    }
})

const fieldModel = mongoose.model('fields', fieldsSchema)
module.exports = fieldModel