import type { HttpContext } from '@adonisjs/core/http'
import ProdutoIngrediente from '#models/produto_ingrediente'
    
    export default class ProdutoIngredienteController {
        async index({request}: HttpContext){
            
            // http://localhost:3333/produtoingredientes?page=1&perPage=5
    
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await ProdutoIngrediente.query().paginate(page, perPage)
            // return await ProdutoIngrediente.query()
        };
    
    
        async show({params}: HttpContext) {
           // return await ProdutoIngrediente.findOrFail(params.id) COMO ERA
           return await ProdutoIngrediente.findOrFail(params.id)
        };
    
    
        async store({request}: HttpContext){
    
            const dados = request.only(["produtoId", "ingredienteId"])
            return await ProdutoIngrediente.create(dados)
            
        };
    
    
        async update({params, request}: HttpContext) {
    
            const produtoingrediente =  await ProdutoIngrediente.findOrFail(params.id)
            const dados = request.only(["produtoId", "ingredienteId"])
            
            produtoingrediente.merge(dados)
        
            return await produtoingrediente.save()
        };
    
    
        async destroy({params}: HttpContext) {
    
            const produtoingrediente =  await ProdutoIngrediente.findOrFail(params.id)
    
            await produtoingrediente.delete()
    
            return {msg:'registro deletado com sucesso', produtoingrediente}
        };
       
    }
