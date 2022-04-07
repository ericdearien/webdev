const router = require('./endpoints/router.js');
const express = require('express');
const path = require('path');
const config = require("../config/config.json");
const env = process.env.NODE_ENV;
const configuration = config[env]

router.use(express.static(path.join(__dirname, 'public')));

router.listen(configuration.port, () => {
    console.log(`App running on port ${configuration.port}`);
});
 