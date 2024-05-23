import Comanda from '#models/comanda'
import type { HttpContext } from '@adonisjs/core/http'

export default class ComandasController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Comandas?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Comanda.query().paginate(page, perPage)
        // return await Comanda.query()
    };


    async show({params}: HttpContext) {
        return await Comanda.query()
        .where('id', params.id)
        .preload('funcionario')
        .preload('cliente')
        .preload('produtos')
        .firstOrFail();
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome", "mesa", "funcionarioID", "clienteId", "formapagamentoID", "dataPagamento", "data", "valor"])
        return await Comanda.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const comanda =  await Comanda.findOrFail(params.id)
        const dados = request.only(["nome", "mesa", "funcionarioID", "clienteId", "formapagamentoID", "dataPagamento", "data", "valor"])
        
        comanda.merge(dados)
    
        return await comanda.save()
    };


    async destroy({params}: HttpContext) {

        const comanda =  await Comanda.findOrFail(params.id)

        await comanda.delete()

        return {msg:'registro deletado com sucesso', Comanda}
    };
   

}