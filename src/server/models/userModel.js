const con = require("./dbconn");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS user (
      user_id INT NOT NULL AUTO_INCREMENT,
      username VARCHAR(255) NOT NULL UNIQUE,
      dob DATE,
      user_password VARCHAR(255),
      CONSTRAINT user_pk PRIMARY KEY(user_id)
    )`;
    await con.query(sql);
}
createTable();

let getUsers = async () => {
    const sql = `SELECT * FROM users`;
    return await con.query(sql);
};

async function getUser(user) {
    let sql;
    if (user.userId) {
        sql = `SELECT * FROM user
        WHERE user_id = ${user.userId}
      `;
    } else {
        sql = `SELECT * FROM user
        WHERE username = "${user.username}"
      `;
    }

    return await con.query(sql);
}

async function login(username, password) {
    userExists(username).then((user) => {
        console.log(user[0])
        if (!user) {
            console.log('could not find user');
            //this is just for showing the application, do !!NOT!! do this regularly
            return {username: 'admin', user_password: 'Asdf123$', user_id: 1 }
        }
        if (user[0].user_password !== password) console.log('Password is incorrect.');
        return user[0];
    })
}

async function register(user) {
    const u = userExists(user.username);
    if (u.length > 0) return u;

    const sql = `INSERT INTO user (username, user_password)
      VALUES ("${user.username}", "${user.password}")
    `;

    const insert = await con.query(sql);
    const newUser = await getUser(user);
    return newUser[0];
}

async function deleteUser(userId) {
    const sql = `DELETE FROM user 
      WHERE user_id = ${userId}
    `;
    await con.query(sql);
}

async function userExists(username) {
    const sql = `SELECT * FROM user
      WHERE username = "${username}"
    `;
    return con.query(sql)
}

function getUserIdFromUsername(username) {
    return con.query(`SELECT * FROM user WHERE username = '${username}'`).then((user)=>{
        return user[0].user_id
    })
}

function editUser(user) {
    const u = userExists(user.userName);
    if (u.length > 0) throw ('Username already in use')

    const currentUser = users.filter((u) => u.id === user.id);
    currentUser[0].userName = user.userName;
    return currentUser[0];
}

module.exports = { getUsers, login, register, deleteUser, editUser, getUserIdFromUsername };