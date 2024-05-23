import Ingrediente from '#models/ingrediente'
import type { HttpContext } from '@adonisjs/core/http'

export default class IngredientesController {
    async index({request}: HttpContext){
        
        // http://localhost:3333/Ingredientes?page=1&perPage=5

        const page = request.input('page', 1)
        const perPage = request.input('perPage', 10)

        return await Ingrediente.query().paginate(page, perPage)
        // return await Ingrediente.query()
    };


    async show({params}: HttpContext) {
        return await Ingrediente.query()
        .where('id', params.id)
        .preload('produtos')
        .firstOrFail();
    };


    async store({request}: HttpContext){

        const dados = request.only(["nome", "descricao"])
        return await Ingrediente.create(dados)
        
    };


    async update({params, request}: HttpContext) {

        const ingrediente =  await Ingrediente.findOrFail(params.id)
        const dados = request.only(["nome", "descrcao"])
        
        ingrediente.merge(dados)
    
        return await ingrediente.save()
    };


    async destroy({params}: HttpContext) {

        const ingrediente =  await Ingrediente.findOrFail(params.id)

        await ingrediente.delete()

        return {msg:'registro deletado com sucesso', Ingrediente}
    };
}