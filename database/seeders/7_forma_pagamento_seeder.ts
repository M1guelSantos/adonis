import { BaseSeeder } from '@adonisjs/lucid/seeders'
import FormaPagamento from '../../app/models/forma_pagamento.js'

export default class extends BaseSeeder {
  async run() {
    await FormaPagamento.createMany
    {
      [
        { nome: "formaPg 1"},
        { nome: "formaPg 2"},
        { nome: "formaPg 3"},
        { nome: "formaPg 4"},
        { nome: "formaPg 5"}
      ]
    }
  }
}