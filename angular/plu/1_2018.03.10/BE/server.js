var express = require('express')
var cors = require('cors')
var bodyParser = require('body-parser')
var app = express()
var mongoose = require('mongoose')
var jwt = require('jwt-simple')


var User = require('./models/user.js')
var Post = require('./models/Post')
var auth = require('./auth.js')

// Use ES6 Promise library
mongoose.Promise = Promise



// Middleware
app.use(cors());
app.use(bodyParser.json());



app.get('/posts/:id', async (req, res) => {
    try {
        var posts = await Post.find({ author: req.params.id }, '-__v')
        res.send(posts)
    } catch (error) {
        console.error(error)
        res.sendStatus(500)
    }
})

app.post('/post', auth.checkAuthenticated, (req, res) => {
    var postData = req.body
    postData.author = req.userId

    var post = new Post(postData)

    post.save((err, result) => {
        if (err) {
            console.error('saving post error')
            res.status(500).send({ message: 'saving post error' })
        }

        res.sendStatus(200)
    })
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

        app.use('/auth', auth.router)
        app.listen(3000);
        console.log('Server started');
    }
    else {
        console.log('Error Could not connect to server')
    }
});

