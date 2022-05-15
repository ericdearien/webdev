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

async function getcardsfor(id) {
  const sql = `SELECT * FROM card WHERE parent_deck_id = ${id}`
  return await con.query(sql)
}

async function study(id, rating) {
  var today = new Date();
  var td = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();
  var duedate = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + (today.getDate() + rating);

  const sql = `UPDATE card 
      set next_due = DATE_ADD(next_due, INTERVAL ${rating} DAY), last_studied = "${td}", num_studied = num_studied + 1 where card_id = ${id}
    `;
  await con.query(sql);
}

async function getDueCardsFor(id) {
  const sql = `SELECT * FROM card WHERE next_due <= CURDATE() and parent_deck_id = ${id};`
  return await con.query(sql)
}

async function newcard(front, back, id) {
  console.log('creating new card:')
  console.log(front, back, id)

  var today = new Date();
  var td = today.getFullYear() + '/' + (today.getMonth() + 1) + '/' + today.getDate();

  const sql = `INSERT INTO card (front, back, parent_deck_id, next_due, num_studied) VALUES ("?", "?", ${id}, "${td}", 0)`;
  const insert = await con.query(sql, [front, back]);
  const sql2 = `UPDATE deck SET num_cards = num_cards + 1 where deck_id = ${id}`;
  await con.query(sql2)
}

async function deletecard(id) {
  const sql = `DELETE FROM card 
      WHERE card_id = ${id}
    `;
  await con.query(sql);
  const sql2 = `UPDATE deck SET num_cards = num_cards - 1 where deck_id = ${id}`;
  await con.query(sql2)
}

async function editcard(front, back, id, deck_id) {
  const sql = `UPDATE card 
      set front = "?", back = "?" where card_id = ${id}
    `;
  await con.query(sql, [front, back]);
}

module.exports = { getcardsfor, deletecard, editcard, newcard, study, getDueCardsFor };