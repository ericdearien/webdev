//This file contains all of the endpoint handlers for our server

module.exports.Test = function (req, res) {
    res.send("Hello World!");
}

module.exports.Home = function (req, res) {
    res.send("Welcome to the webapp");
}