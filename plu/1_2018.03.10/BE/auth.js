
var User = require('./models/user.js')
var bcrypt = require('bcrypt-nodejs')
var jwt = require('jwt-simple')
var express = require('express')
var router = express.Router()

async function register(req, res) {
    var userData = req.body;
    var user = new User(userData);

    var existingUser = await User.findOne({ email: userData.email })

    if (existingUser !== null) {
        conosle.log('User with email ' + userData.email + 'already exists in the system')
        res.status(409).send({ message: 'User with email ' + userData.email + 'already exists in the system' })
    }
    else {
        user.save((err, result) => {
            if (err)
                console.log(userData.email);

            console.log('User ' + userData.email + 'registered successfully')
            // Send Resource Code 201 since new record was created.
            res.sendStatus(201);
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

        var payload = {};

        var token = jwt.encode(payload, '123')

        console.log('User Passwords match');

        //to send status and response need to use res.status
        return res.status(200).send({ token })
    })
}

router.post('/register', register)

router.post('/login', login)

module.exports = router