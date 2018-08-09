var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var jwt = require('jwt-simple')
var bcrypt = require('bcrypt-nodejs')

var User = require('./models/user.js')

// Use ES6 Promise library
mongoose.Promise = Promise

var posts = [
    { message: 'hello' },
    { message: 'hi' },
    { message: 'Bye' },
    { message: 'Be Happy' },
]


// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.get('/users', async (req, res) => {
    try {
        var users = await User.find({}, '-password -__v')
        res.send(users)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.get('/profile/:id', async (req, res) => {
    try {
        var user = await User.findById(req.params.id, '-password -__v')
        res.send(user)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.post('/register', async (req, res) => {
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
})

app.post('/login', async (req, res) => {
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
})

var dbConnectionString = '';
//dbConnectionString = 'mongodb://dct:paradox@ds113849.mlab.com:13849/learning-db'
dbConnectionString = 'mongodb://localhost:27017/learning-db'
mongoose.connect(dbConnectionString, {}, (err) => {
    if (!err) {
        console.log('connected to mongodb');
        app.listen(3000);
        console.log('Server started');
    }
    else {
        console.log('Error Could not connect to server')
    }
});

