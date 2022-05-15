//This file contains all of the endpoint handlers for our server
const path = require('path');
const fs = require('fs');
const User = require('../models/userModel');
const Lesson = require('../models/lessonModel');
const Deck = require('../models/deckModel');
const Card = require('../models/cardModel');

module.exports.Home = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/home.html')).pipe(res);
}

module.exports.RegisterPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/register.html')).pipe(res);
}

module.exports.ReadLesson = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/read.html')).pipe(res);
}

module.exports.EditLessonPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/edit_lesson.html')).pipe(res);
}

module.exports.Login = function (req, res) {
    try {
        console.log('trying to log in')
        console.log(req.body)
        let user = User.login(req.body.username, req.body.password)
        res.send(user);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.NumDue = async function (req, res) {
    try {
        console.log('trying to find num due')
        console.log(req.body)
        let numDue = Deck.getNumDue(req.body.username, req.body.password)
        res.send({ numDue });
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.getUserID = async function (req, res) {
    try {
        console.log('trying to find user ID')
        console.log(req.body)
        id = await User.getUserIdFromUsername(req.body.username)
        console.log('getUserID:', id)
        res.send({ user_id: id, username: req.body.username })
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.CreateCard = async function (req, res) {
    try {
        console.log('creating new card')
        console.log(req.body)
        const card = await Card.newcard(req.body.front, req.body.back, req.body.deckID);
        res.send(card);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.DeleteCard = async function (req, res) {
    try {
        console.log('deleting card')
        const card = await Card.deletecard(req.body.card_id);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetAllCardsFor = async function (req, res) {
    try {
        console.log('trying to get all cards for deck ' + req.body.deck_id)
        const cards = await Card.getcardsfor(req.body.deck_id);

        res.send(cards);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetAllDueCardsFor = async function (req, res) {
    try {
        console.log('trying to get all due cards for deck ' + req.body.deck_id)
        const cards = await Card.getDueCardsFor(req.body.deck_id);
        res.send(cards);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.UpdateCard = async function (req, res) {
    try {
        console.log('creating new card')
        console.log(req.body)
        const card = await Card.editcard(req.body.front, req.body.back, req.body.card_id, req.body.deck_id);
        res.send(card);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.StudyCard = async function (req, res) {
    try {
        console.log('studying card')
        console.log(req.body)
        const card = await Card.study(req.body.id, req.body.diff);
        res.send({msg:'done'});
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.Register = function (req, res) {
    try {
        console.log('trying to register')
        console.log(req.body)
        const user = User.register(req.body);
        res.send({ ...user, password: undefined })
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetAllLessons = async function (req, res) {
    try {
        console.log('trying to get all lessons')
        const lessons = await Lesson.getAllLessons();
        res.send(lessons)
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetSingleLesson = async function (req, res) {
    try {
        console.log('trying to get a lesson with id ' + req.body.lesson_id)
        const lesson = await Lesson.getLesson(req.body.lesson_id);
        res.send(lesson[0])
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.CreateLesson = function (req, res) {
    try {
        var today = new Date();

        var td = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
        let lesson = {
            title: req.body.title,
            body: req.body.text,
            created_by: req.body.created_by,
            created_on: td
        }
        console.log('trying to create lesson')
        console.log(lesson)
        Lesson.createLesson(lesson);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.Updatelesson = function (req, res) {
    try {
        let lesson = {
            title: req.body.title,
            body: req.body.text,
            lesson_id: req.body.lesson_id
        }
        console.log('trying to update lesson')
        Lesson.editLesson(lesson);
    } catch (error) {
        console.log(error.message)
        res.status(401).send({ message: error.message });
    }
}

module.exports.Account = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/view_account.html')).pipe(res);
}

module.exports.Logout = function (req, res) {
    localStorage.removeItem('user');
    console.log('logging out')
    window.location.href = "/";

}

//Page you see immediately after logging in
module.exports.LandingPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/landing.html')).pipe(res);
}

module.exports.ViewDecks = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/decks.html')).pipe(res);
}

module.exports.GetAllDecks = async function (req, res) {
    console.log('getting all decks')
    try {
        let decks = await Deck.getMyDecks(req.body.id);
        console.log('sending decks:', decks)
        res.send(decks)
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.Lessons = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/lessons.html')).pipe(res);
}

module.exports.EditDeckPage = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/edit_deck.html')).pipe(res);
}

module.exports.Study = function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/study.html')).pipe(res);
}

module.exports.CreateDeck = async function (req, res) {
    try {
        console.log(req.body.title, req.body.date)
        Deck.newDeck(req.body.title, req.body.date, req.body.id);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.GetDeck = function (req, res) {
    try {
        let deck = Deck.GetDeck(req.body.deck_id);
        res.send(deck)
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.DeleteUser = function (req, res) {
    try {
        User.deleteUser(req.body.userId);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.LoginPage = function (req, res) {
    //This will eventually be connected to the db to create a deck
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/login.html')).pipe(res);
}

module.exports.NewLessonPage = function (req, res) {
    //This will eventually be connected to the db to create a deck
    res.writeHead(200, { 'Content-Type': 'text/html' });
    fs.createReadStream(path.join(__dirname, '../public/pages/create_lesson.html')).pipe(res);
}

module.exports.DeleteDeck = function (req, res) {
    try {
        Deck.deleteDeck(req.body.id);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.DeleteLesson = function (req, res) {
    try {
        Lesson.deleteLesson(req.body.lesson_id);
    } catch (error) {
        res.status(401).send({ message: error.message });
    }
}

module.exports.UpdateUser = function (req, res) {
    try {
        const user = User.editUser(req.body);
        res.send({ ...user, password: undefined });
    } catch (error) {
        res.status(401).send({ message: error.message })
    }
}