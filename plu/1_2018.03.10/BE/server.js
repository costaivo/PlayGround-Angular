var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')



var User = require('./models/user.js')
var auth = require('./auth.js')

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


var dbConnectionString = '';
//dbConnectionString = 'mongodb://dct:paradox@ds113849.mlab.com:13849/learning-db'
dbConnectionString = 'mongodb://localhost:27017/learning-db'
mongoose.connect(dbConnectionString, {}, (err) => {
    if (!err) {
        console.log('connected to mongodb');
        app.use('/auth', auth)
        app.listen(3000);
        console.log('Server started');
    }
    else {
        console.log('Error Could not connect to server')
    }
});

