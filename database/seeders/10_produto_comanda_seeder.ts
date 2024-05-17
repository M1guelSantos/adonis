import { BaseSeeder } from '@adonisjs/lucid/seeders'
import ProdutoComanda from '../../app/models/produto_comanda.js'

export default class extends BaseSeeder {
  async run() {
    ProdutoComanda.createMany([
      {produtoId: 1, comandaId: 1, quantidade: 1},
      {produtoId: 3, comandaId: 2, quantidade: 1},
      {produtoId: 4, comandaId: 3, quantidade: 1}

    ])
  }
}