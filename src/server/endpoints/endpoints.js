//This file contains all of the endpoint handlers for our server
const path = require('path');
const fs = require('fs');
const User = require('../models/userModel');
const Lesson = require('../models/lessonModel');
const Deck = require('../models/deckModel');
const Card = require('../models/cardModel');

module.exports.Home = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/home.html')).pipe(res);
}


module.exports.RegisterPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/register.html')).pipe(res);
}

module.exports.Login = async function (req, res) {
    try {
        console.log('trying to log in')
        console.log(req.body)
        const user = await User.login(req.body.username, req.body.password);
        res.send({ ...user, password: undefined });
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.Register = function (req, res) {
    try {
        console.log('trying to register')
        console.log(req.body)
        const user = User.register(req.body);
        res.send({ ...user, password: undefined })
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.Account = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/view_account.html')).pipe(res);
}

module.exports.Logout = function (req, res) {
    localStorage.removeItem('user');
    console.log('logging out')
    window.location.href = "/";

}

//Page you see immediately after logging in
module.exports.LandingPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/landing.html')).pipe(res);
}

module.exports.RegisterNewUser = function (req, res) {
    //TODO: make this connect to the database, for now just creates a new user object
    res.writeHead(200, { 'Content-Type': 'json' });

    //the user id will not be a static 10 after database is created
    newUser = User(10, req.body.email, req.body.pword);
}

module.exports.ViewDecks = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/decks.html')).pipe(res);
}

module.exports.GetMyDecks = function (req, res) {
    //TODO: this should return a json blob with all of the decks this user owns
}

module.exports.Lessons = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/lessons.html')).pipe(res);
}

module.exports.EditDeckPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/edit_deck.html')).pipe(res);
}

module.exports.Study = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/study.html')).pipe(res);
}

module.exports.CreateDeck = function (req, res) {
    try {
        Deck.newDeck(req.body.name, req.body.date);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}
module.exports.GetDeck = function (req, res) {
    //This will eventually be connected to the db to create a deck
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/decks.html')).pipe(res);
}
module.exports.DeleteUser = function (req, res) {
    try {
        User.deleteUser(req.body.userId);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}


module.exports.LoginPage = function (req, res) {
    //This will eventually be connected to the db to create a deck
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/login.html')).pipe(res);
}

module.exports.DeleteDeck = function (req, res) {
    try {
        Deck.DeleteDeck(req.body.userId);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}
module.exports.UpdateUser = function (req, res) {
    try {
        const user = User.editUser(req.body);
        res.send({ ...user, password: undefined });
    } catch (error) {
        res.status(401).send({ message: error.message })
    }
}