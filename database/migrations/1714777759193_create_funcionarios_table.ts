import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'funcionarios'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('nome', 45)
      table.string('cpf', 14)
      table.string('endereco', 200)
      table.string('sexo', 1)
      table.string('telefone', 15)
      table.integer('cargo_id', 15).unsigned().notNullable()
      table.foreign('cargo_id')
      .references('id')
      .inTable('cargos')
      
      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}