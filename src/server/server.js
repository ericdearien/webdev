const mysql = require('mysql2');

var dbconn = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Asdf123$"
});

dbconn.connect(function (err) {
  console.log('trying to connect to db')
  if (err) throw err;
  console.log("Connected!");
  dbconn.query("CREATE DATABASE IF NOT EXISTS webdev", function (err, result) {
    if (err) console.log('database schema webdev does not exist, please restart to attempt connection again');
    console.log('database schema webdev exists')    
  });
});

const router = require('./endpoints/router.js');
const express = require('express');
const app = express();
const path = require('path');
const config = require("../config/config.json");
const { waitForDebugger } = require('inspector');
const env = process.env.NODE_ENV;
const configuration = config[env]

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(router)

app.use(express.static(path.join(__dirname, 'public')));

//CORS middleware
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
});

app.listen(configuration.port, () => {
    console.log(`App running on port ${configuration.port}`);
});
