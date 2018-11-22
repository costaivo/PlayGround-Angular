var mongoose = require('mongoose')
var bcrypt = require('bcrypt-nodejs')

const userSchema = mongoose.Schema({
    email: String,
    password: String,
    name: String,
    description: String
})


// Encrypt Password Before saving in DB. 
userSchema.pre('save', function (next) {
    var user = this

    if (!user.isModified('password'))
        return next()

    bcrypt.hash(user.password, null, null, (err, hash) => {
        if (err) return next(err)

        user.password = hash
        next()
    })
})

module.exports = mongoose.model('User', userSchema)