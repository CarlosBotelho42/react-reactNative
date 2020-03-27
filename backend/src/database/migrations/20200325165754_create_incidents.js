
exports.up = function(knex) {

  return knex.schema.createTable('incidents', function(table){
    table.increments() //Cria um valor auitomatico para id
    
    table.string('title').notNullable()
    table.string('description').notNullable()
    table.decimal('value').notNullable()

    table.string('ong_id').notNullable();

    //Fazendo a chave estrangeira
    table.foreign('ong_id').references('id').inTable('ongs')
   
})

};

exports.down = function(knex) {
  return knex.schema.dropTable('ongs')

};
