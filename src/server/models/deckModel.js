const decks = [
  {
      id: 1,
      name: "My Deck",
      date: "Today"
  },
  {
      id: 2,
      name: "My Second Deck",
      date: "Tomorrow"
  },
  {
      id: 3,
      name: "My Third Deck",
      date: "12/3/31"
  }
]

let getDecks = () => decks;

function newDeck(name, date) {
  const newDeck = {
    id: decks[decks.length - 1].id + 1,
    name: deck.name,
    date: deck.date
}

decks.push(newDeck);
return newDeck;
}

function deleteDeck(id) {
  let i = decks.map((deck) => deck.id).indexOf(id);
  decks.splice(i, 1);
  console.log(decks);
}

function deckExists(name) {
  console.log("Found Deck");
  return decks.filter((u) => u.name === name);
}

function editDeck(deck) {
  const d = deckExists(deck.name);
  if (d.length > 0) throw ('name already in use')

  const currentDeck = decks.filter((d) => d.id === deck.id);
  currentDeck[0].name = deck.name;
  return currentDeck[0];
}

module.exports = { getDecks, deleteDeck, editDeck, newDeck };