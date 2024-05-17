import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Ingrediente from '../../app/models/ingrediente.js'


export default class extends BaseSeeder {
  async run() {
    await Ingrediente.createMany
    {[
      {nome: "ingrediente 1", descricao: "descricao 1"},
      {nome: "ingrediente 2", descricao: "ingrediente 2"},
      {nome: "ingrediente 3", descricao: "ingrediente 3"},
      {nome: "ingrediente 4", descricao: "ingrediente 4"},
    ]}
  }
}