let current_card_id = 0
let current_card_index = 0
let cards
let t = new Date()
let today = t.getFullYear() + '/' + (t.getMonth() + 1) + '/' + t.getDate();
let frontspace = document.getElementById('card-front')
let backspace = document.getElementById('card-back')

fetchData('/deck/allDueCards', { deck_id: url_deck_id }, "POST").then((data) => {
    cards = data

    if (cards.length == 0) {
        console.log('no more cards found')
        frontspace.innerHTML = 'No more cards due to study today'
        backspace.innerHTML = 'No more cards due to study today'
    } else {
        current_card_id = cards[current_card_index].card_id
        frontspace.innerHTML = cards[current_card_index].front
        backspace.innerHTML = cards[current_card_index].back
    }
})

async function Advance(diff) {
    if (current_card_index >= cards.length) {
        frontspace.innerHTML = 'No more cards due to study today'
        backspace.innerHTML = 'No more cards due to study today'
        return;
    }

    console.log(diff)
    fetchData('/card/study', { id: current_card_id, diff: diff }, 'PUT').then((msg) => console.log(msg))

    current_card_index++
    if (current_card_index >= cards.length) {
        frontspace.innerHTML = 'No more cards due to study today'
        backspace.innerHTML = 'No more cards due to study today'
        return;
    }

    current_card_id = cards[current_card_index].card_id
    frontspace.innerHTML = cards[current_card_index].front
    backspace.innerHTML = cards[current_card_index].back
}
