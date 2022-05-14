let cardTable = document.getElementById('cardTable')
if (cardTable) fillCards();

function fillCards() {
    fetchData('/deck/allCards', { deck_id: url_deck_id }, 'POST').then((cards) => {
        console.log(cards)
        cards.forEach((card) => {
            AppendCardTableRow('cardTable', card)
        });
    })
}