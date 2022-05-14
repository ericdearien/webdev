let paramString = window.location.href.split('?')[1];
let pair = paramString.split('=')
let deck_id = pair[1]

function RevealModal(mid, cid, bid) {
  // Get the modal
  var modal = document.getElementById(mid);

  // Get the button that opens the modal
  var btn = document.getElementById(bid);

  // Get the element that closes the modal
  var span = document.getElementsByClassName(cid)[0];

  // When the user clicks the button, open the modal 
  btn.onclick = function () {
    modal.style.display = "block";
  }

  // When the user clicks on x, close the modal
  span.onclick = function () {
    modal.style.display = "none";
  }

  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function (event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
}

var newRows = 0

function AppendTableRow(tid, data) {
  var table = document.getElementById(tid);
  var newRow = table.insertRow(-1);

  if (!data) {
    newRow.id = "newRow" + newRows;
    var inputCell = newRow.insertCell(0);
    inputCell.innerHTML = `<input type="text" class="general-text-input" id="input${newRows}" placeholder="Name...">`;

    var subCell = newRow.insertCell(1);
    subCell.innerHTML = `<button class="table-button" onclick="createNewDeck(${newRows++})">Create</button>`;
    subCell.colSpan = "8";
    return;
  }

  newRow.id = data.deck_id

  var nameCell = newRow.insertCell(-1);
  nameCell.innerHTML = data.title

  var cardsCell = newRow.insertCell(-1);
  cardsCell.innerHTML = data.num_cards

  var lastStudied = newRow.insertCell(-1);
  if (data.last_studied) {
    lastStudied.innerHTML = data.last_studied.substring(0, 10)
  } else {
    lastStudied.innerHTML = '-'
  }

  var dateCell = newRow.insertCell(-1);
  dateCell.innerHTML = data.created_on.substring(0, 10)

  var c7 = newRow.insertCell(-1);
  c7.innerHTML = `<a href="./study?deckID=${data.deck_id}"><i class="fa fa-graduation-cap" aria-hidden="true">`;
  var c8 = newRow.insertCell(-1);
  c8.innerHTML = `<a href="./deck/update?deckID=${data.deck_id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
  var c9 = newRow.insertCell(-1);
  c9.innerHTML = `<a href='' onclick='deleteDeck(${data.deck_id})'><i class="fa fa-trash-o" aria-hidden="true"></a>`;
}

function createNewDeck(id) {
  //After DB is created, this should asynchronously create a new deck in the db so we get persistence
  var inp = document.getElementById("input" + id).value;
  var row = document.getElementById("newRow" + id);

  var today = new Date();

  var td = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  let ndid = newDeck(inp, td, getCurrentUser().user_id)

  row.innerHTML = "";

  var c1 = row.insertCell(-1);
  c1.innerHTML = inp;
  var c2 = row.insertCell(-1);
  c2.innerHTML = "0";
  var c4 = row.insertCell(-1);
  c4.innerHTML = "-";
  var c6 = row.insertCell(-1);
  c6.innerHTML = td
  var c7 = row.insertCell(-1);
  c7.innerHTML = `<a href="./study?deckID=${ndid}"><i class="fa fa-graduation-cap" aria-hidden="true">`;
  var c8 = row.insertCell(-1);
  c8.innerHTML = `<a href="./deck/update?deckID=${ndid}"><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
  var c9 = row.insertCell(-1);
  c9.innerHTML = `<a href='' onclick='deleteDeck(${ndid}><i class="fa fa-trash-o" aria-hidden="true"></a>`;
}

function deleteDeck(id) {
  fetchData('/deck/delete', { id: id }, 'DELETE')
  window.location.reload();
}

var newLessonRows = 0

function AppendLessonTableRow(tid, lesson) {
  var table = document.getElementById(tid);
  var newRow = table.insertRow(-1);

  newRow.id = lesson.lesson_id

  var nameCell = newRow.insertCell(-1);
  nameCell.innerHTML = lesson.title
  var madeby = newRow.insertCell(-1);
  madeby.innerHTML = lesson.created_by

  var next = newRow.insertCell(-1);
  next.innerHTML = lesson.created_on.substring(0, 10)

  var c7 = newRow.insertCell(-1);
  c7.innerHTML = `<a href="./read?lessonID=${lesson.lesson_id}"><i class="fa fa-book-open" aria-hidden="true">`;
  var c8 = newRow.insertCell(-1);
  if (getCurrentUser().username == lesson.created_by) {
    c8.innerHTML = `<a href="./lesson/editPage?lessonID=${lesson.lesson_id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
  }
  var c9 = newRow.insertCell(-1);
  if (getCurrentUser().username == lesson.created_by) {
    c9.innerHTML = `<a href='' onclick='deleteLesson(${lesson.lesson_id})'><i class="fa fa-trash-o" aria-hidden="true"></a>`; 
  }
}

var newCardRows = 0

function AppendCardTableRow(tid, card) {
  var table = document.getElementById(tid);
  var newRow = table.insertRow(-1);

  if (!card) {
    newRow.id = "newRow" + newRows;
    var fCell = newRow.insertCell(-1);
    fCell.innerHTML = `<input type="text" class="general-text-input" id="input${newCardRows}" placeholder="Lorem Ipsum...">`;
    newRow.id = "newRow" + newRows;
    var bCell = newRow.insertCell(-1);
    bCell.innerHTML = `<input type="text" class="general-text-input" id="input${newCardRows}" placeholder="Lorem Ipsum...">`;

    var subCell = newRow.insertCell(-1);
    subCell.innerHTML = `<button class="table-button" onclick="newCard(${newCardRows++})">Create</button>`;
    subCell.colSpan = "8";
    return;
  }

  newRow.id = lesson.lesson_id

  var nameCell = newRow.insertCell(-1);
  nameCell.innerHTML = lesson.title
  var madeby = newRow.insertCell(-1);
  madeby.innerHTML = lesson.created_by

  var next = newRow.insertCell(-1);
  next.innerHTML = lesson.created_on.substring(0, 10)

  var c7 = newRow.insertCell(-1);
  c7.innerHTML = `<a href="./read?lessonID=${lesson.lesson_id}"><i class="fa fa-book-open" aria-hidden="true">`;
  var c8 = newRow.insertCell(-1);
  if (getCurrentUser().username == lesson.created_by) {
    c8.innerHTML = `<a href="./lesson/editPage?lessonID=${lesson.lesson_id}"><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
  }
  var c9 = newRow.insertCell(-1);
  if (getCurrentUser().username == lesson.created_by) {
    c9.innerHTML = `<a href='' onclick='deleteLesson(${lesson.lesson_id})'><i class="fa fa-trash-o" aria-hidden="true"></a>`; 
  }
}