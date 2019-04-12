const db = require("./dbConfig.js");

module.exports = {
  getItem,
  update
};

function getItem(id) {
  return db("items")
    .where({ id })
    .first();
}

function update(id, item) {
  return db("items")
    .where({ id })
    .update({ ...item });
}
