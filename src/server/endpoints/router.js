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
router.get("/deck/getAll", endpoints.GetAllDecks);
router.get("/registerPage", endpoints.RegisterPage);
router.get("/deck/update", endpoints.EditDeckPage);

//POST
router.post("/login", endpoints.Login);
router.post("/register", endpoints.Register);
router.post("/logout", endpoints.Logout);
router.post("/createDeck", endpoints.CreateDeck);
router.post("/newcard", endpoints.CreateCard);
router.post("/user/userID", endpoints.getUserID);

//DELETE
router.delete("/user/delete", endpoints.DeleteUser);
router.delete("/deck/delete", endpoints.DeleteDeck);
// router.delete('/card/delete', endpoints.DeleteCard);
// router.delete('/lesson/delete', endpoints.DeleteLesson);

//UPDATE
// router.post("/user/update", endpoints.UpdateUser);

module.exports = router; 