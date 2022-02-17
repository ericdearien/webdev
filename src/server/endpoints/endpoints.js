//This file contains all of the endpoint handlers for our server
const path = require('path');
const fs = require('fs');

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

module.exports.Logout = function (req, res) {
    //TODO: make this function
}

module.exports.ValidateLogin = function (req, res) {
    //TODO: make this function
}