import type { HttpContext } from '@adonisjs/core/http'
import Ingrediente from "../models/cargo.js";

export default class IngredienteController {

    async index({ request }: HttpContext) {

        // http://localhost:3333/ingrediente?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Ingrediente.query().paginate(page, perPage)
        // return await Ingrediente.query()
    };


    async show({ params }: HttpContext) {
        // return await Ingrediente.findOrFail(params.id) COMO ERA
        return await Ingrediente.query()
            .where('id', params.id)
            .first()
    };


    async store({ request }: HttpContext) {

        const dados = request.only(["nome"])
        return await Ingrediente.create(dados)

    };


    async update({ params, request }: HttpContext) {

        const ingrediente = await Ingrediente.findOrFail(params.id)
        const dados = request.only(["nome"])

        ingrediente.merge(dados)

        return await ingrediente.save()
    };


    async destroy({ params }: HttpContext) {

        const ingrediente = await Ingrediente.findOrFail(params.id)

        await ingrediente.delete()

        return { msg: 'registro deletado com sucesso', ingrediente }
    };

}