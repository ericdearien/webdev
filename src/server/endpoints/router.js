const endpoints = require('./endpoints.js');
const express = require("express");
const router = express();

//GET
router.get("/", endpoints.Home);
router.get("/loginPage", endpoints.LoginPage);
router.get("/home", endpoints.LandingPage);
router.get("/viewdecks", endpoints.ViewDecks);
router.get("/lessons", endpoints.Lessons);
router.get("/study", endpoints.Study);
router.get("/deck/get", endpoints.GetDeck);
router.get("/registerPage", endpoints.RegisterPage);
router.get("/deck/update", endpoints.EditDeckPage);
router.get("/lesson/newPage", endpoints.NewLessonPage);
router.get('/read', endpoints.ReadLesson);
router.get('/lesson/editPage', endpoints.EditLessonPage);

//POST
router.post("/login", endpoints.Login);
router.post("/lesson/single", endpoints.GetSingleLesson);
router.post("/deck/getAll", endpoints.GetAllDecks);
router.post("/register", endpoints.Register);
router.post("/logout", endpoints.Logout);
router.post("/createDeck", endpoints.CreateDeck);
router.post("/newcard", endpoints.CreateCard);
router.post("/user/userID", endpoints.getUserID);
router.post('/deck/numDue', endpoints.NumDue);
router.post('/lesson/create', endpoints.CreateLesson);
router.post("/lesson/all", endpoints.GetAllLessons);
router.post("/deck/allCards", endpoints.GetAllCardsFor);

//DELETE
router.delete("/user/delete", endpoints.DeleteUser);
router.delete("/deck/delete", endpoints.DeleteDeck);
router.delete('/card/delete', endpoints.DeleteCard);
router.delete('/lesson/delete', endpoints.DeleteLesson);

//PUT
// router.put("/user/update", endpoints.UpdateUser);   update user not needed
// router.put("/deck/updateVals", endpoints.Updatedeck) not needed anymore
router.put("/lesson/update", endpoints.Updatelesson)
router.put("/card/update", endpoints.UpdateCard)
router.put("/card/study", endpoints.StudyCard)

module.exports = router; 