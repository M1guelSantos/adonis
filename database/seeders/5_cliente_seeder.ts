import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cliente from '../../app/models/cliente.js'

export default class extends BaseSeeder {
  async run() {
     await Cliente.createMany([
      {nome: "nome 1", cpf: "11111111111", telefone: "11111111111", email: "email1@gmail.com"},
      {nome: "nome 2", cpf: "22222222222", telefone: "22222222222", email: "email2@gmail.com"},
      {nome: "nome 3", cpf: "33333333333", telefone: "33333333333", email: "email3@gmail.com"},
      {nome: "nome 4", cpf: "44444444444", telefone: "44444444444", email: "email4@gmail.com"},
    ])
  }
}