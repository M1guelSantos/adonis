import type { HttpContext } from '@adonisjs/core/http'
import ProdutoComanda from "../models/produto_comanda.js";
    
    export default class ProdutoComandaController {
        async index({request}: HttpContext){
            
            // http://localhost:3333/produtocomandas?page=1&perPage=5
    
            const page = request.input('page', 1)
            const perPage = request.input('perPage', 10)
    
            return await ProdutoComanda.query().paginate(page, perPage)
            // return await ProdutoComanda.query()
        };
    
    
        async show({params}: HttpContext) {
           // return await ProdutoComanda.findOrFail(params.id) COMO ERA
           return await ProdutoComanda.findOrFail(params.id)
        };
    
    
        async store({request}: HttpContext){
    
            const dados = request.only(["produtoId", "comandaId"])
            return await ProdutoComanda.create(dados)
            
        };
    
    
        async update({params, request}: HttpContext) {
    
            const produtocomanda =  await ProdutoComanda.findOrFail(params.id)
            const dados = request.only(["produtoId", "comandaId"])
            
            produtocomanda.merge(dados)
        
            return await produtocomanda.save()
        };
    
    
        async destroy({params}: HttpContext) {
    
            const produtocomanda =  await ProdutoComanda.findOrFail(params.id)
    
            await produtocomanda.delete()
    
            return {msg:'registro deletado com sucesso', produtocomanda}
        };
       
    }
