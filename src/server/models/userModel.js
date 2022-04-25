const users = [
    {
        id: 1,
        userName: "Eric",
        password: "password"
    },
    {
        id: 2,
        userName: "Derek",
        password: "password1"
    },
    {
        id: 3,
        userName: "Rick",
        password: "password3"
    }
]

let getUsers = () => users;

function login(username, password) {
    const user = userExists(username);
    if (!user[0]) throw Error('User not found');
    if (user[0].password !== password) throw Error('Password is incorrect.');

    return user[0];
}

function register(user) {
    const u = userExists(user.username);
    if (u.length > 0) throw Error('User already exists, stopping registration')

    const newUser = {
        id: users[users.length - 1].id + 1,
        userName: user.username,
        password: user.password
    }

    users.push(newUser);
    return newUser;
}

function deleteUser(id) {
    let i = users.map((user) => user.id).indexOf(id);
    users.splice(i, 1);
    console.log(users);
}

function userExists(username) {
    console.log("Found User");
    return users.filter((u) => u.userName === username);
}

function editUser(user) {
    const u = userExists(user.userName);
    if (u.length > 0) throw ('Username already in use')

    const currentUser = users.filter((u) => u.id === user.id);
    currentUser[0].userName = user.userName;
    return currentUser[0];
}

module.exports = { getUsers, login, register, deleteUser, editUser };