let helpers = require("./helpers.js");

class User {
    constructor(id, name, desc, date) {
        this.id = id;
        this.name = name;
        this.desc = desc;
        this.date = date;
    }

    // returns current id
    getID() {
        return this.id;
    }

    //sets a new deck id in the database
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

    //returns this Deck's info
    getDeckInfo(desc) {
        return this.desc;
    }
    
    setDeckInfo(info) {
        this.desc = info;
    }

    //returns JSON for all cards in this Deck
    findCards() {
        //TODO: make this function after database implementation and card implementation
    }
}