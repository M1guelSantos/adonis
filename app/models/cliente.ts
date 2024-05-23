import { DateTime } from 'luxon'
import { BaseModel, column, hasMany } from '@adonisjs/lucid/orm'
import type { HasMany } from '@adonisjs/lucid/types/relations'
import Comanda from './comanda.js'

export default class Cliente extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare nome: string
  
  @column()
  declare cpf: string

  @column()
  declare telefone: string
  
  @column()
  declare email: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime

  @hasMany(()=>Comanda)
  declare comandas: HasMany<typeof Comanda>
}