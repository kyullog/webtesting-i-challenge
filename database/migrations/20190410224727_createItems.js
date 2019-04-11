exports.up = function(knex, Promise) {
  return knex.schema.createTable("items", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl.integer("enhancement").notNullable();
    tbl.integer("durability").notNullable();
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTableIfExists("items");
};
