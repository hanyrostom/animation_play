exports.up = function(knex, Promise) {
  return  Promise.all([
    knex.schema.createTableIfNotExists('users', function (table) {
    table.increments('id').primary()
    table.string('username')
    table.string('password')
  }),
    knex.schema.createTableIfNotExists('goals', function (table) {
    table.increments('id').primary()
    table.string('goal')
    table.string('description')
    table.integer('id_user')
  })
]);
  // TODO: CREATE ANY OTHER TABLES YOU NEED
};

exports.down = function(knex, Promise) {
  // TODO: DROP OTHER TABLES

  return Promise.all([
        knex.schema.dropTableIfExists("users"),
        knex.schema.dropTableIfExists("goals")
    ]);

};
