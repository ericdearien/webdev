let helpers = require("./helpers.js");

class User {
    constructor(id, username, password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    // returns current user id
    getID() {
        return this.id;
    }

    //sets a new user id in the database
    //Should this be allowed? probably not... think about it though
    setID(id) {
        this.id = id;
    }

    //returns the current username
    getUsername() {
        return this.username;
    }

    //changes the username in the database
    setUsername(username) {
        this.username = username
        //TODO: save in database
    }

    //in the future this will return the hashed password to be validated, but for now it is not hashed in order to increase readability
    getPassword() {
        return this.password;
    }

    //given a password, hashes it and puts it in the database
    setPassword(password) {
        if (this.validPassword(pswd)) {
            this.userPassword = pswd;
        } else {
            console.log("Password must have at least 1 uppercase letter, 1 symbol, 2 numbers,"
                + "and have a length of at least 10 characters.");
        }
    }
    //valid password method
    validPassword(password) {
        if (password.length >= 10) {
            let upper = 0;
            let numbers = 0;
            let symbols = 0;

            for (let i = 0; i < password.length; i++) {
                if (this.isDigit(password[i])) {
                    numbers++;
                } else if (!this.isLetterOrDigit(password[i])) {
                    symbols++;
                } else if (this.isUpperCase(password[i])) {
                    upper++;
                }
            }

            if (upper >= 1 && numbers >= 2 && symbols >= 1) {
                return true;
            }
        }
        return false;
    }

    //returns JSON for all owned decks in the database that correspond to this user id
    findDecks() {
        //TODO: make this function after database implementation
    }

    //returns this   user's progress for a specific lesson
    findLessonInfo(lesson) {
        //TODO: make this function after database implementation
    }

    //returns this user's progress for a specific course
    findCourseInfo(course) {
        //TODO: make this function after database implementation
    }
}