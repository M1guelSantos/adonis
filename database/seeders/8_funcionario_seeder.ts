import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Funcionario from '../../app/models/funcionario.js'

export default class extends BaseSeeder {
  async run() {
      Funcionario.createMany([
        {nome: "funcionario 1", cpf: "11111111111", endereco: "endereco 1", sexo: "F", telefone:"11111111111", cargoId: 1},
        {nome: "funcionario 2", cpf: "22222222222", endereco: "endereco 2", sexo: "F", telefone:"22222222222", cargoId: 2},
        {nome: "funcionario 3", cpf: "33333333333", endereco: "endereco 3", sexo: "M", telefone:"333333333333", cargoId: 3},
        {nome: "funcionario 4", cpf: "44444444444", endereco: "endereco 4", sexo: "F", telefone:"44444444444", cargoId: 4}
      ])
  }
}