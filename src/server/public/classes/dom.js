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

function AppendTableRow(tid) {
    var table = document.getElementById(tid);
    var newRow = table.insertRow(-1);
    newRow.id = "newRow" + newRows;

    var inputCell = newRow.insertCell(0);
    inputCell.innerHTML = `<input type="text" class="general-text-input" id="input${newRows}" placeholder="Name...">`;

    var subCell = newRow.insertCell(1);
    subCell.innerHTML = `<button class="table-button" onclick="createNewDeck(${newRows++})">Create</button>`;
    subCell.colSpan = "8";
}

function createNewDeck(id) {
    //After DB is created, this should asynchronously create a new deck in the db so we get persistence
    var inp = document.getElementById("input" + id).value;
    var row = document.getElementById("newRow" + id);

    row.innerHTML = "";

    var c1 = row.insertCell(0);
    c1.innerHTML = inp;
    var c2 = row.insertCell(1);
    c2.innerHTML = "0";
    var c3 = row.insertCell(2);
    c3.innerHTML = "0";
    var c4 = row.insertCell(3);
    c4.innerHTML = "-";
    var c5 = row.insertCell(4);
    c5.innerHTML = "Eric Dearien";  //this should be user.name or something
    var c6 = row.insertCell(5);
    c6.innerHTML = "4/7/2022(placeholder)";
    var c7 = row.insertCell(6);
    c7.innerHTML = `<a href="./study?deckID=3"><i class="fa fa-graduation-cap" aria-hidden="true">`;
    var c8 = row.insertCell(7);
    c8.innerHTML = `<a><i class="fa fa-pencil-square-o" aria-hidden="true"></a></i>`;
    var c9 = row.insertCell(8);
    c9.innerHTML = `<a><i class="fa fa-trash-o" aria-hidden="true"></a>`;
}

function deleteDeck(id) {
//TODO: this should delete a deck from the database when the db is up and running
}