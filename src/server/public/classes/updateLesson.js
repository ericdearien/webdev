let paramString = window.location.href.split('?')[1];
let pair = paramString.split('=')
let lesson_id = pair[1]

let title = document.getElementById('title')

document.getElementById('updateButton').onclick = function() {
    updateLesson(lesson_id)
}

fetchData('/lesson/single', { lesson_id: lesson_id }, 'post').then((lesson) => {
    body = lesson.body.substring(1, lesson.body.length - 1)
    console.log(body)
    title.value = lesson.title
    console.log(quill.setContents(JSON.parse(body).ops))
})