const mysql = require("mysql2");

//create connection
var con = mysql.createConnection({
    host:"localhost",
    user:"admin",
    password:"Asdf123$",
    database:"db"
});

