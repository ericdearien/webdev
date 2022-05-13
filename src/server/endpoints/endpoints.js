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

module.exports.Login = function (req, res) {
    try {
        console.log('trying to log in')
        console.log(req.body)
        let user = User.login(req.body.username, req.body.password)
        res.send(user);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.getUserID = async function (req, res) {
    try {
        console.log('trying to find user ID')
        console.log(req.body)
        id = await User.getUserIdFromUsername(req.body.username)
        console.log('getUserID:', id)
        res.send({ user_id: id, username: req.body.username })
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.CreateCard = async function (req, res) {
    try {
        console.log('creating new card')
        console.log(req.body)
        const card = await Card.newCard(req.body.front, req.body.back, req.body.deckID);
        res.send(card);
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

module.exports.ViewDecks = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/decks.html')).pipe(res);
}

module.exports.GetAllDecks = async function (req, res) {
    console.log('getting all decks')
    try {
        let decks = await Deck.getMyDecks(req.body.id);
        console.log('sending decks:', decks)
        res.send(decks)
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
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
        console.log(req.body.title, req.body.date)
        Deck.newDeck(req.body.title, req.body.date, req.body.id);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetDeck = function (req, res) {
    try {
        let deck = Deck.GetDeck(req.body.deck_id);
        res.send(deck)
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
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
        Deck.DeleteDeck(req.body.deckID);
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