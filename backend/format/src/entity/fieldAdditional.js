const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId

const fieldsSchema = new Schema({
    type: {
        type: String,
        require: true
    },
    id_format: {
        type: ObjectId,
        require: true
    },
    area : {
        type: String,
        require: true
    },
    name_header : {
        type: String,
        require: true
    },
    field : {
        type: String,
        require: true
    },
    date_created: {
        type: Date,
        require: true,
        default: Date.now
    },
    user_created: {
        type: ObjectId,
        require: true
    }
    
})

const fieldModel = mongoose.model('additional', fieldsSchema)
module.exports = fieldModel