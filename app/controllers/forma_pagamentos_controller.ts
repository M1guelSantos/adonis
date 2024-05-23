import type { HttpContext } from '@adonisjs/core/http'
import FormaPagamentos from "../models/cargo.js";

export default class FormaPagamentosController {

    async index({ request }: HttpContext) {

        // http://localhost:3333/formapagamentoss?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await FormaPagamentos.query().paginate(page, perPage)
        // return await FormaPagamentos.query()
    };


    async show({ params }: HttpContext) {
        // return await FormaPagamentos.findOrFail(params.id) COMO ERA
        return await FormaPagamentos.findOrFail(params.id)
    };


    async store({ request }: HttpContext) {

        const dados = request.only(["nome"])
        return await FormaPagamentos.create(dados)

    };


    async update({ params, request }: HttpContext) {

        const formapagamentos = await FormaPagamentos.findOrFail(params.id)
        const dados = request.only(["nome"])

        formapagamentos.merge(dados)

        return await formapagamentos.save()
    };


    async destroy({ params }: HttpContext) {

        const formapagamentos = await FormaPagamentos.findOrFail(params.id)

        await formapagamentos.delete()

        return { msg: 'registro deletado com sucesso', formapagamentos }
    };

}