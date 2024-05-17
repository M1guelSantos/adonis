import type { HttpContext } from '@adonisjs/core/http'
import Funcionario from "../models/cargo.js";

export default class FuncionarioController {

    async index({ request }: HttpContext) {

        // http://localhost:3333/funcionario?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Funcionario.query().paginate(page, perPage)
        // return await Funcionario.query()
    };


    async show({ params }: HttpContext) {
        // return await Funcionario.findOrFail(params.id) COMO ERA
        return await Funcionario.query()
            .where('id', params.id)
            .first()
    };


    async store({ request }: HttpContext) {

        const dados = request.only(["nome"])
        return await Funcionario.create(dados)

    };


    async update({ params, request }: HttpContext) {

        const funcionario = await Funcionario.findOrFail(params.id)
        const dados = request.only(["nome"])

        funcionario.merge(dados)

        return await funcionario.save()
    };


    async destroy({ params }: HttpContext) {

        const funcionario = await Funcionario.findOrFail(params.id)

        await funcionario.delete()

        return { msg: 'registro deletado com sucesso', funcionario }
    };

}