import type { HttpContext } from '@adonisjs/core/http'
import ProdutoIngredientea from "../models/produto_comanda.js";
    
    export default class ProdutoIngredienteaController {
        async index({request}: HttpContext){
            
            // http://localhost:3333/produtoingredienteas?page=1&perPage=5
    
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await ProdutoIngredientea.query().paginate(page, perPage)
            // return await ProdutoIngredientea.query()
        };
    
    
        async show({params}: HttpContext) {
           // return await ProdutoIngredientea.findOrFail(params.id) COMO ERA
            return await ProdutoIngredientea.query()
            .where('id', params.id)
            .first()
        };
    
    
        async store({request}: HttpContext){
    
            const dados = request.only(["produtoId", "ingredienteId"])
            return await ProdutoIngredientea.create(dados)
            
        };
    
    
        async update({params, request}: HttpContext) {
    
            const produtoingredientea =  await ProdutoIngredientea.findOrFail(params.id)
            const dados = request.only(["produtoId", "ingredienteId"])
            
            produtoingredientea.merge(dados)
        
            return await produtoingredientea.save()
        };
    
    
        async destroy({params}: HttpContext) {
    
            const produtoingredientea =  await ProdutoIngredientea.findOrFail(params.id)
    
            await produtoingredientea.delete()
    
            return {msg:'registro deletado com sucesso', produtoingredientea}
        };
       
    }
