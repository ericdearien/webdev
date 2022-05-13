console.log('loaded main')
function logout() {
    console.log('logging out')
    localStorage.removeItem('user')
    window.location.href = "/";
}

function setCurrentUser(user) {
    console.log(user)
    localStorage.setItem('user', JSON.stringify(user));
}

function removeCurrentUser() {
    localStorage.removeItem('user')
}

function getCurrentUser() {
    return JSON.parse(localStorage.getItem('user'));
}


console.log(getCurrentUser())

function login(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetchData('/login', { username: username, password: password }, 'POST')
        .then((data) => {
            console.log(data)
            if (!data.message) {
                window.location.href = "/home?" + data.message;
            }
        })
        .catch((error) => {
            console.log(error.message);
        });

    fetchData('/user/userID', { username: username }, 'post').then((data) => {
        console.log(data)
        setCurrentUser(data)
    }).catch((error) => {
        console.log(error.message)
    })
}

function register(e) {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    fetchData('/register', { username: username, password: password }, "POST")
        .then((data) => {
            if (!data.message) {
                setCurrentUser(data);
                window.location.href = "/home";
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
}

function enterNewCard(e) {
    const deckID = document.getElementById('deck-id').value
    const front = document.getElementById('card-front').value
    const back = document.getElementById('card-back').value
    fetchData('/newcard', { deckID: deckID, front: front, back: back }, "POST")
        .then((data) => {
            resetCardInput(data)
        })
        .catch((error) => {
            console.log(error.message);
        });
}

function newDeck(name, date, id) {
    fetchData('/createDeck', { title: name, date: date, id: id }, "POST")
        .then((data) => {
            console.log(`deck ${name} created`)
        })
        .catch((error) => {
            console.log('ERROR:')
            console.log(name, date)
            console.log(error.message);
        });
}

function resetCardInput(data) {
    //TODO:
}

async function fetchData(url = '', data = {}, methodType) {
    const response = await fetch(`http://localhost:10000${url}`, {
        method: methodType, // *GET, POST, PUT, DELETE, etc.
        mode: 'cors', // no-cors, *cors, same-origin
        cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        credentials: 'same-origin', // include, *same-origin, omit
        headers: {
            'Content-Type': 'application/json',
            // 'Content-Type': 'application/x-www-form-urlencoded',
        },
        redirect: 'follow', // manual, *follow, error
        referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(data) // body data type must match "Content-Type" header
    });
    if (response.ok) {
        return await response.json(); // parses JSON response into native JavaScript objects
    } else {
        throw await response.json();
    }
}

function Advance(diff) {
    console.log(diff)
}