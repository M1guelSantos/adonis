import Cliente from '#models/cliente'
import type { HttpContext } from '@adonisjs/core/http'

export default class ClientesController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Clientes?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Cliente.query().paginate(page, perPage)
        // return await Cliente.query()
    };


    async show({params}: HttpContext) {
        return await Cliente.query()
        .where('id', params.id)
        .preload('comandas')
        .firstOrFail();
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome", "cpf", "telefone","email" ])
        return await Cliente.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const cliente =  await Cliente.findOrFail(params.id)
        const dados = request.only(["nome", "cpf", "telefone","email" ])
        
        cliente.merge(dados)
    
        return await cliente.save()
    };


    async destroy({params}: HttpContext) {

        const cliente =  await Cliente.findOrFail(params.id)

        await cliente.delete()

        return {msg:'registro deletado com sucesso', Cliente}
    };
   

}