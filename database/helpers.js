const db = require("./dbConfig.js");

module.exports = {
  getItem
};

function getItem(id) {
  return db("items")
    .where({ id })
    .first();
}
