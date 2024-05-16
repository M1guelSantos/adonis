import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Produto from '../../app/models/produto.js'

export default class extends BaseSeeder {
  async run() {
    
    await Produto.createMany([
      {nome: 'Coca-cola', preco: 6.5, tamanho:'330ml',tipoId:1},
      {nome: 'Coca-cola 2l', preco: 10, tamanho:'2l',tipoId:1},
      {nome: 'Coca-cola 600', preco: 8, tamanho:'600ml',tipoId:1},
      {nome: 'Coca-cola ks', preco: 6.5, tamanho:'290ml',tipoId:1},
      
      {nome: 'Onion Rings', preco: 15, tamanho:'300g',tipoId:5},
      {nome: 'Batata Frita', preco: 10, tamanho:'300g',tipoId:5}
    ])

  }
}