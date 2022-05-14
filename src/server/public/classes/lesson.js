let deckTable = document.getElementById('lesson-table')
if (deckTable) fillLessons();

function fillLessons() {
    fetchData('/deck/getAll', { id: getCurrentUser().user_id }, 'POST').then((decks) => {
        console.log(decks)
        decks.forEach((deck) => {
            AppendTableRow('deckTable', deck)
        });
    })
}