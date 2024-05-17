import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Comanda from '../../app/models/comanda.js'

export default class extends BaseSeeder {
  async run() {
    Comanda.createMany([
      {mesa: "mesa 1", funcionarioId: 4, clienteId: 1, formaPagamentoId: 1, data: new Date()},
      {mesa: "mesa 2", funcionarioId: 2, clienteId: 2, formaPagamentoId: 2, data: new Date()},
      {mesa: "mesa 3", funcionarioId: 3, clienteId: 3, formaPagamentoId: 5, data: new Date()},
    ])
  }
}