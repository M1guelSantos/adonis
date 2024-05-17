import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'comandas'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('mesa',45)
      table.integer('funcionario_id').unsigned().notNullable();
      table.integer('cliente_id').unsigned().notNullable()
      table.integer('forma_pagamento_id').unsigned().notNullable()
      table.dateTime('data_pagamento')
      table.dateTime('data')
      table
      .foreign('funcionario_id')
      .references('id')
      .inTable('funcionarios')

      table
      .foreign('cliente_id')
      .references('id')
      .inTable('cliente')

      table
      .foreign('forma_pagamento_id')
      .references('id')
      .inTable('forma_pagamento')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}