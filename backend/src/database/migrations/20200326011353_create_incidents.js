/* 
UP: O que precisa ser feito 
DOWN: Como faço rollback
*/
exports.up = function(knex) {
    return knex.schema.createTable('incidents', function (table) {
        table.increments() //PK

        table.string('title').notNullable()
        table.string('description').notNullable()
        table.decimal('value').notNullable()
        
        table.string('ong_id').notNullable()
        table.foreign('ong_id').references('id').inTable('ongs') //FK
    })
};

exports.down = function(knex) {
  return knex.schema.dropTable('incidents')
};
