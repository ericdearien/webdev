let deckTable = document.getElementById('lesson-table')
if (deckTable) fillLessons();

function fillLessons() {
    fetchData('/lesson/all', {}, 'GET').then((lessons) => {
        console.log(lessons)
        lessons.forEach((lesson) => {
            AppendLessonTableRow('lesson-table', lesson)
        });
    })
}

const newLessonRows = 0

function AppendLessonTableRow(tid, lesson) {
    var table = document.getElementById(tid);
    var newRow = table.insertRow(-1);

    newRow.id = lesson.lesson_id

    var nameCell = newRow.insertCell(-1);
    nameCell.innerHTML = lesson.title

    var next = newRow.insertCell(-1);
    next.innerHTML = lesson.created_on

    var c7 = newRow.insertCell(-1);
    c7.innerHTML = `<a href="./read?lessonID=${lesson.lesson_id}"><i class="fa fa-glasses" aria-hidden="true">`;
    var c8 = newRow.insertCell(-1);
    c8.innerHTML = `<a href="./deck/update?lessonID=${lesson.lesson_id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
    var c9 = newRow.insertCell(-1);
    c9.innerHTML = `<a href='' onclick='deleteDeck(${lesson.lesson_id})'><i class="fa fa-trash-o" aria-hidden="true"></a>`;
}

function NewLessonPage() {
    window.location = '/lesson/newPage'
}