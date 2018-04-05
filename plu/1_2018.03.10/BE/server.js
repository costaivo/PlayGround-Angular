var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var jwt = require('jwt');

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
})

app.post('/login', async (req, res) => {
    var userData = req.body

    var user = await User.findOne({ email: userData.email })

    if (!user)
        return res.sendStatus(401).send({ message: 'Email or Password invalid' })

    if (userData.pwd != user.pwd)
        return res.sendStatus(401).send({ message: 'Email or Password invalid' })

    var payload = {};

    var token = jwt.encode(payload, '123')

    console.log(token)

    res.sendStatus(200).send({ token: token });
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

