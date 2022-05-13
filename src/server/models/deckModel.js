const con = require("./dbconn");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS deck (
      deck_id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL,
      owner_id INT,
      last_studied DATE,
      num_cards INT DEFAULT 0,
      created_on DATE,
      CONSTRAINT deck_pk PRIMARY KEY(deck_id),
      CONSTRAINT owner_pk
      FOREIGN KEY(owner_id)
      REFERENCES user (user_id)
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

async function newDeck(name, date, id) {
  console.log('creating new deck:')
  console.log(name, date, id)
  const sql = `INSERT INTO deck (title, owner_id, created_on) VALUES ("${name}", ${id}, "${date}")`;

  const insert = await con.query(sql);
}

async function deleteDeck(id) {
  const sql = `DELETE FROM deck 
      WHERE deck_id = ${id}
    `;
  await con.query(sql);
}

async function editDeck(name, id) {
  const sql = `UPDATE deck 
      set title = "${name}" where deck_id = ${id}
    `;
  await con.query(sql);
}

module.exports = { getMyDecks, deleteDeck, editDeck, newDeck };