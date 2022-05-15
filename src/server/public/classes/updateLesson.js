
let title = document.getElementById('title')

document.getElementById('updateButton').onclick = function() {
    updateLesson(url_deck_id)
}

fetchData('/lesson/single', { lesson_id: url_deck_id }, 'post').then((lesson) => {
    body = lesson.body.substring(1, lesson.body.length - 1)
    console.log(body)
    title.value = lesson.title
    console.log(quill.setContents(JSON.parse(body).ops))
})