import type { HttpContext } from '@adonisjs/core/http'
import Comanda from "../models/cargo.js";

export default class ComandaController {

    async index({ request }: HttpContext) {

        // http://localhost:3333/comanda?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comanda.query().paginate(page, perPage)
        // return await Comanda.query()
    };


    async show({ params }: HttpContext) {
        // return await Comanda.findOrFail(params.id) COMO ERA
        return await Comanda.query()
            .where('id', params.id)
    };


    async store({ request }: HttpContext) {

         const dados = request.only(["nome"])
        return await Comanda.create(dados)

    };


    async update({ params, request }: HttpContext) {

        const comanda = await Comanda.findOrFail(params.id)
        const dados = request.only(["nome"])

        comanda.merge(dados)

        return await comanda.save()
    };


    async destroy({ params }: HttpContext) {

        const comanda = await Comanda.findOrFail(params.id)

        await comanda.delete()

        return { msg: 'registro deletado com sucesso', comanda }
    };

}