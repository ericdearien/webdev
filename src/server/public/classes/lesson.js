let deckTable = document.getElementById('lesson-table')
if (deckTable) fillLessons();

function fillLessons() {
    fetchData('/lesson/all', {}, 'post').then((lessons) => {
        console.log(lessons)
        lessons.forEach((lesson) => {
            AppendLessonTableRow('lesson-table', lesson)
        });
    })
}

function NewLessonPage() {
    window.location = '/lesson/newPage'
}