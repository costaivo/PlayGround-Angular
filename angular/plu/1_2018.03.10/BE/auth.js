
var User = require('./models/user.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

function createSendToken(res, user, statusId = 200) {
    var payload = { sub: user._id };

    var token = jwt.encode(payload, '123')

    //to send status and response need to use res.status
    return res.status(statusId).send({ token })
}

async function register(req, res) {
    var userData = req.body;
    var user = new User(userData);

    var existingUser = await User.findOne({ email: userData.email })

    if (existingUser !== null) {
        res.status(409).send({ message: 'User with email ' + userData.email + 'already exists in the system' })
    }
    else {
        user.save((err, newUser) => {
            if (err)
                return res.status(500).send({ message: 'Error saving user' })

            // Send Resource Code 201 since new record was created.
            createSendToken(res, newUser, 201)
        })
    }
}

async function login(req, res) {
    console.log('In login function')
    var loginData = req.body

    var user = await User.findOne({ email: loginData.email })

    console.log(user);

    // Application will wait until the above code is executed before executing the below code. 
    if (!user)
        return res.status(401).send({ message: 'Email or Password invalid' })

    console.log('User exists in the system');

    bcrypt.compare(loginData.password, user.password, (err, isMatch) => {
        if (!isMatch)
            return res.status(401).send({ message: ' Password invalid' })

        createSendToken(res, user)
    })
}


function checkAuthenticated(req, res, next) {
    if (!req.header('authorization'))
        return res.status(401).send({ message: 'Unauthorized. Missing Auth Header' })

    var token = req.header('authorization').split(' ')[1]

    var payload = jwt.decode(token, '123')

    if (!payload)
        return res.status(401).send({ message: 'Unauthorized.Auth Header Invalid' })

    req.userId = payload.sub

    // call the next middleware
    next()
}

router.post('/register', register)
router.post('/login', login)

module.exports = {
    router,
    checkAuthenticated
}