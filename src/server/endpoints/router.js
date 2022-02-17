const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

router.get("/", endpoints.Home);
router.get("/home", endpoints.Home);
router.get("/login", endpoints.Login);
router.get("/register", endpoints.Register);

module.exports = router;