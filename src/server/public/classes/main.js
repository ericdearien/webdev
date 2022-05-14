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
                window.location.href = "/loginPage";
            }
        })
        .catch((error) => {
            console.log(error.message);
        });
}

function newCard(id) {
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
    window.location.reload()
}


function newLesson() {
    let title = document.getElementById('lesson-title').value
    let text = quill.getContents()
    fetchData('/lesson/create', { title: title, text: JSON.stringify(text), created_by: getCurrentUser().username}, "POST")
        .then((data) => {
            console.log(`lesson ${title} created`)
        })
        .catch((error) => {
            console.log('ERROR:')
            console.log(error.message);
        });
    window.location = '/lessons'
}

function updateLesson(id) {
    let title = document.getElementById('title').value
    let text = quill.getContents()
    fetchData('/lesson/update', { title: title, text: JSON.stringify(text), lesson_id: id}, "PUT")
        .then((data) => {
            console.log(`lesson ${title} created`)
        })
        .catch((error) => {
            console.log('ERROR:')
            console.log(error.message);
        });
    window.location = '/lessons'
}


function deleteLesson(id) {
    fetchData('/lesson/delete', { lesson_id: id}, "DELETE")
        .then((data) => {
            console.log(`lesson ${id} deleted`)
        })
        .catch((error) => {
            console.log('ERROR:')
            console.log(error.message);
        });
    window.location = '/lessons'
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

// async function Advance(diff, id) {
//     console.log(diff, id)
//     fetchData('/card/study', { id: id, diff: diff }, 'PUT')
// }