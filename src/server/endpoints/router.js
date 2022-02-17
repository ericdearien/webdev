const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

router.get("/", endpoints.Test);
router.get("/home", endpoints.Home);

module.exports = router;