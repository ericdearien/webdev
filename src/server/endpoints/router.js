const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

router.get("/", endpoints.Home);
router.get("/home", endpoints.LandingPage);
router.get("/login", endpoints.Login);
router.get("/register", endpoints.Register);
router.get("/account", endpoints.Account);
router.get("/viewdecks", endpoints.ViewDecks);
router.get("/lessons", endpoints.Lessons);
router.get("/study", endpoints.Study)

//logout should probably be post?
router.get("/logout", endpoints.Logout);
router.post("/validateLogin", endpoints.ValidateLogin);
router.post("/createDeck", endpoints.CreateDeck);

module.exports = router; 