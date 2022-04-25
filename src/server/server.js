const router = require('./endpoints/router.js');
const express = require('express');
const path = require('path');
const config = require("../config/config.json");
const env = process.env.NODE_ENV;
const configuration = config[env]

router.use(express.static(path.join(__dirname, 'public')));

//CORS middleware
router.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, ContentType, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET,POST,PUT,DELETE,OPTIONS");
    next();
   });

router.listen(configuration.port, () => {
    console.log(`App running on port ${configuration.port}`);
});
 