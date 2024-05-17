import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoIngrediente from '../../app/models/produto_ingrediente.js'

export default class extends BaseSeeder {
  async run() {
    await ProdutoIngrediente.createMany
    {[
      {produtoId: 1, ingredienteId:1},
      {produtoId: 2, ingredienteId:2},
      {produtoId: 3, ingredienteId:3},
      {produtoId: 4, ingredienteId:4},
    ]}
  }
}