let helpers = require("./helpers.js");

class Lesson {
    constructor(id, name, desc, created_by) {
        this.ID = id;
        this.title = name;
        this.body = desc;
        this.created_by = created_by;
        this.created_on = today.getFullYear()+'/'+(today.getMonth()+1)+'/'+today.getDate()
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