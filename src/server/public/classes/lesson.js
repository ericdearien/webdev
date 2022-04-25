let helpers = require("./helpers.js");

class User {
    constructor(id, name, desc) {
        this.id = id;
        this.name = name;
        this.desc = desc;
    }

    // returns current id
    getID() {
        return this.id;
    }

    //sets a new lesson id in the database
    //Should this be allowed? probably not... think about it though
    setID(id) {
        this.id = id;
    }

    //returns the current name
    getname() {
        return this.name;
    }

    //changes the name in the database
    setname(name) {
        this.name = name;
        //TODO: save in database
    }

    //returns this lesson's info
    getLessonInfo(lesson) {
        return this.desc;
    }
    
    setLessonInfo(info) {
        this.desc = info;
    }

    //returns JSON for all questions in this lesson
    findQuestions() {
        //TODO: make this function after database implementation
    }
}