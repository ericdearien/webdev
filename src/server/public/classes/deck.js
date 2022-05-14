let deckTable = document.getElementById('deckTable')
if (deckTable) fillOwnedDecks();

function fillOwnedDecks() {
    fetchData('/deck/getAll', { id: getCurrentUser().user_id }, 'POST').then((decks) => {
        console.log(decks)
        decks.forEach((deck) => {
            AppendTableRow('deckTable', deck)
        });
    })
}