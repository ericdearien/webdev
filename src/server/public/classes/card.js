let cardTable = document.getElementById('cardTable')
if (cardTable) fillCards();

function fillCards() {
    fetchData('/deck/allCards', { deck_id: deck_id }, 'POST').then((decks) => {
        console.log(decks)
        decks.forEach((deck) => {
            AppendTableRow('deckTable', deck)
        });
    })
}