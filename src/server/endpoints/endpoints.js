//This file contains all of the endpoint handlers for our server
const path = require('path');
const fs = require('fs');
const user = require('../public/classes/user');

module.exports.Home = function (req, res) {
    //TODO: this filepath should be made more reliable in case i change the file system
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/home.html')).pipe(res);
}

module.exports.Login = function (req, res) {
    //TODO: this filepath should be made more reliable in case i change the file system
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/login.html')).pipe(res);
}

module.exports.Register = function (req, res) {
    //TODO: this filepath should be made more reliable in case i change the file system
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/register.html')).pipe(res);
}

module.exports.Account = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/view_account.html')).pipe(res);
}

module.exports.Logout = function (req, res) {
    //TODO: make this function log out of session after sessions are implemented, for now just passes back to home page
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/home.html')).pipe(res);
}

module.exports.ValidateLogin = function (req, res) {
    //TODO: create function to validate the login, for now this just passes through
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/landing.html')).pipe(res);
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
    //This will eventually be connected to the db to create a deck
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/decks.html')).pipe(res);
}
