var mongoose = require('mongoose')

const PostSchema = mongoose.Schema({
    message: String
})


module.exports = mongoose.model('Post', PostSchema)