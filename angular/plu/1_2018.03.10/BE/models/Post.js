var mongoose = require('mongoose')
var Schema = mongoose.Schema

const PostSchema = mongoose.Schema({
    message: String,
    author: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    }
})


module.exports = mongoose.model('Post', PostSchema)