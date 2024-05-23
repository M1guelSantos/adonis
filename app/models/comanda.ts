import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Funcionario from './funcionario.js'
import Cliente from './cliente.js'
import Produto from './produto.js'

export default class Comanda extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare mesa: string

  @column()
  declare funcionarioId: number

  @column()
  declare clienteId: number
  
  @column()
  declare formaPagamentoId: number
  
  @column.dateTime({ autoCreate: true})
  declare dataPagamento: DateTime 

  @column()
  declare data: Date

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(() => Funcionario)
  declare funcionario: BelongsTo<typeof Funcionario>

  @belongsTo(() => Cliente)
  declare cliente: BelongsTo<typeof Cliente>

  @manyToMany(() => Produto, {
    pivotTable: 'produto_comandas',
  })
  declare produtos: ManyToMany<typeof Produto>
}