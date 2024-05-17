import { BaseSeeder } from '@adonisjs/lucid/seeders'
import Cargo from '../../app/models/cargo.js'

export default class extends BaseSeeder {
  async run() {
    await Cargo.createMany
    {
      [
        { nome: "cargo 1"},
        { nome: "cargo 2"},
        { nome: "cargo 3"},
        { nome: "cargo 4"},
        { nome: "cargo 5"}
      ]
    }
  }
}
