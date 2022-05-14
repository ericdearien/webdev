let paramString = window.location.href.split('?')[1];
let pair = paramString.split('=')
let lesson_id = pair[1]

let title = document.getElementById('title')

var quill = new Quill('#editor', {
    "theme": "snow",
    "modules": {
        "toolbar": false
    }
});

fetchData('/lesson/single', { lesson_id: lesson_id }, 'post').then((lesson) => {
    body = lesson.body.substring(1, lesson.body.length - 1)
    console.log(body)
    title.innerHTML = lesson.title
    console.log(quill.setContents(JSON.parse(body).ops))
    quill.enable(false)
})