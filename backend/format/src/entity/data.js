const mongoose = require('mongoose')
const Schema = mongoose.Schema
var ObjectId = Schema.Types.ObjectId
const dataSchema = new Schema({
    id_field: {
        type: ObjectId,
        require: true
    },
    area: {
        type: String,
        require: true
    },
    value: {
        type: String,
        require: true
    },
    user_created: {
        type: ObjectId,
        require: true
    },
    user_updated: {
        type: ObjectId,
        require: true
    },
    date_created: {
        type: Date,
        require: true,
        default: Date.now
    },
    date_updated: {
        type: Date,
        require: true
    }
    
})

const dataModel = mongoose.model('data', dataSchema)
module.exports = dataModel