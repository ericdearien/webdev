const con = require("./dbconn");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS card (
      card_id INT NOT NULL AUTO_INCREMENT,
      front TEXT,
      back TEXT,
      last_studied DATE,
      parent_deck_id INT,
      num_studied INT,
      last_rating INT,
      next_due DATE,
      CONSTRAINT card_pk PRIMARY KEY(card_id),
      CONSTRAINT deck_pk
      FOREIGN KEY(parent_deck_id)
      REFERENCES deck (deck_id)
      ON DELETE SET NULL
      ON UPDATE NO ACTION
    )`;
    await con.query(sql);
}
createTable();


async function getMyDecks(userId) {
    const sql = `SELECT * FROM deck WHERE owner_id = ${userId}`
    return await con.query(sql)
  }
  
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
    return decks.filter((u) => u.name === name);
  }
  
  function editDeck(deck) {
    const d = deckExists(deck.name);
    if (d.length > 0) throw ('name already in use')
  
    const currentDeck = decks.filter((d) => d.id === deck.id);
    currentDeck[0].name = deck.name;
    return currentDeck[0];
  }
  
  module.exports = { getMyDecks, deleteDeck, editDeck, newDeck };