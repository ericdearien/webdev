const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

router.get("/", endpoints.Home);
router.get("/home", endpoints.Home);
router.get("/login", endpoints.Home);
router.get("/register", endpoints.Home);

module.exports = router;