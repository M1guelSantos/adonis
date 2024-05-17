import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'produto_comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.integer('produto_id').unsigned().notNullable()
      table.integer('comanda_id').unsigned().notNullable()
      table.integer('quantidade')
      table
      .foreign('produto_id')
      .references('id')
      .inTable('produtos')

      table
      .foreign('comanda_id')
      .references('id')
      .inTable('comandas')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}