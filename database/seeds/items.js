const items = require("../../items.js");

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex("items")
    .del()
    .then(function() {
      // Inserts seed entries
      return knex("items").insert([
        { ...items.stick },
        { ...items.oldSword },
        { ...items.oldShield },
        { ...items.magicSword },
        { ...items.ultimateSpear }
      ]);
    });
};
