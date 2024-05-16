import { DateTime } from 'luxon'
import { BaseModel, belongsTo, column, manyToMany } from '@adonisjs/lucid/orm'
import type { BelongsTo, ManyToMany } from '@adonisjs/lucid/types/relations'
import Tipo from './tipo.js'
import Ingrediente from './ingrediente.js'

export default class Produto extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string

  @column()
  declare preco: number

  @column()
  declare tamanho: string

  @column()
  declare tipoId: number

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @belongsTo(()=>Tipo)
  declare tipo: BelongsTo<typeof Tipo>

  @manyToMany(()=>Ingrediente, {
    pivotTable: 'produto_ingredientes'
  })
  declare ingredientes: ManyToMany<typeof Ingrediente>
}