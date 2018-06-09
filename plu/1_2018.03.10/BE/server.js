var express = require('express');
var cors = require('cors');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
var jwt = require('jwt-simple');

var User = require('./models/user.js');

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
    console.log('In login function')
    var userData = req.body

    var user = await User.findOne({ email: userData.email })

    console.log(user);

    // Application will wait until the above code is executed before executing the below code. 
    if (!user)
        return res.status(401).send({ message: 'Email or Password invalid' })

    console.log('User exists in the system');

    if (userData.password != user.password)
        return res.status(401).send({ message: ' Password invalid' })

    console.log('User Passwords match');

    var payload = {};

    var token = jwt.encode(payload, '123')


    //to send status and response need to use res.status
    return res.status(200).send({ token });
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

