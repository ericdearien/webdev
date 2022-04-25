const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

//GET
router.get("/", endpoints.Home);
router.get("/loginPage", endpoints.LoginPage);
router.get("/home", endpoints.LandingPage);
router.get("/account", endpoints.Account);
router.get("/viewdecks", endpoints.ViewDecks);
router.get("/lessons", endpoints.Lessons);
router.get("/study", endpoints.Study);
router.get("/deck/get", endpoints.GetDeck);
router.get("/registerPage", endpoints.RegisterPage);

//POST
router.post("/login", endpoints.Login);
router.post("/register", endpoints.Register);
router.post("/logout", endpoints.Logout);
router.post("/createDeck", endpoints.CreateDeck);

//DELETE
router.post("/user/delete", endpoints.DeleteUser);
router.post("/deck/delete", endpoints.DeleteDeck);

//UPDATE
router.post("/user/update", endpoints.UpdateUser);
router.post("/deck/update", endpoints.EditDeckPage);

module.exports = router; 