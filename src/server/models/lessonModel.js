const con = require("./dbconn");

async function createTable() {
  let sql = `CREATE TABLE IF NOT EXISTS lesson (
      lesson_id INT NOT NULL AUTO_INCREMENT,
      title VARCHAR(255) NOT NULL UNIQUE,
      body TEXT,
      created_by VARCHAR(255) NOT NULL,
      created_on DATE,
      CONSTRAINT lesson_pk PRIMARY KEY(lesson_id)
    )`;
  await con.query(sql);
}
createTable();

let getLessons = async () => {
  const sql = `SELECT * FROM lesson`;
  return await con.query(sql);
};

async function getAllLessons() {
  const sql = `SELECT title, created_by, created_on, lesson_id FROM lesson`;
  return await con.query(sql);
}

async function getLesson(id) {
  let sql;
  sql = `SELECT * FROM lesson
        WHERE lesson_id = ${id}
      `;
  

  return await con.query(sql);
}

async function createLesson(lesson) {
  const sql = `INSERT INTO lesson (title, body, created_by, created_on)
      VALUES ("?", "?", "${lesson.created_by}", "${lesson.created_on}")
    `;

  const insert = await con.query(sql, [lesson.title, lesson.body]);
}

async function deleteLesson(lessonID) {
  const sql = `DELETE FROM lesson 
      WHERE lesson_id = ${lessonID}
    `;
  await con.query(sql);
}

async function editLesson(lesson) {
  const sql = `UPDATE lesson SET
      title = "?",
      body = "?"
      WHERE lesson_id = ${lesson.lesson_id}
    `;
    console.log(lesson.body)
  const update = await con.query(sql, [lesson.title, lesson.body]);
}

module.exports = { getAllLessons, editLesson, deleteLesson, createLesson, getLesson, getLessons };