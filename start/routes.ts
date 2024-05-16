/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import IngredientesController from '../app/controllers/ingredientes_controller.js'
import ProdutosController from '../app/controllers/produtos_controller.js'
import TiposController from '../app/controllers/tipos_controller.js'

router.get('/', async () => {
  return {
    hello: 'world',
  }
})

router.get('/nome', async () => {
  return {
    hello: 'world',
  }
})

router.resource('/produtos', ProdutosController).apiOnly()
router.resource('/tipos', TiposController).apiOnly()
router.resource('/ingredientes', IngredientesController).apiOnly()

