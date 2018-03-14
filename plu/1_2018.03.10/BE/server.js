var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');

var User = require('./models/user.js');

var posts = [
    { message: 'hello' },
    { message: 'hi' },
    { message: 'Bye' },
]

// Middleware
app.use(cors());
app.use(bodyParser.json());

app.get('/posts', (req, res) => {
    res.send(posts);
})

app.post('/register', (req, res) => {
    var userData = req.body;
    var user = new User(userData);
    user.save((err, result) => {
        if (err)
            console.log(userData.email);

        res.sendStatus(200);
    })

    res.sendStatus(200);
})

mongoose.connect('mongodb://dct:paradox@ds113849.mlab.com:13849/learning-db', {}, (err) => {
    if (!err)
        console.log('connected to mongodb');
});

app.listen(3000);
console.log('Server started');