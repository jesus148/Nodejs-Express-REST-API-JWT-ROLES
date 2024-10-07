

// endpoints para los productos

import {  Router} from 'express';

// imporamops todos los metodos del controller
import * as productoAll from '../controllers/products.controller';
import {verifyToken} from '../middlewares';

const router = Router()


// obtener todo
// // http://localhost:4000/products ----get
// router.get('/' , (req, res)=> res.json('get products'))
router.get('/' , productoAll.getProducts)





// post crear productos
// http://localhost:4000/products   --post
// headers> content-type : application/json
//   x-acces-token > poner el token 
// application/json : le dice al server q el request sera json 
// {
//     "name":"laptop lenovo",
//     "category":"laptops",
//     "price":999.99,
//     "imgUrl":"https://imageio.forbes.com/specials-images/imageserve/65ab8d96ee06c40dad0e2cc9/Real-Madrid-has-registered-a-new-defender-ahead-of-its-La-Liga-debut-against/960x0.jpg?format=jpg&width=1440"
// }
router.post('/' , verifyToken ,productoAll.createProducs)





// obtener producto x id 
// http://localhost:4000/products/66fcb2919ebd5e548fdcc969 ----get
// 66fcb2919ebd5e548fdcc969 : id de la coleccion 
router.get('/:productId' , productoAll.getProductsById)




// //put x id
// http://localhost:4000/products/66fcb2919ebd5e548fdcc969 --- put
// {
//     "name": "celular 2024"
// } --- data a actualizar puedes poner todo o solo ciertos campos a actualizar 
router.put('/:productId' , productoAll.updateProductBy)




// http://localhost:4000/products/66ff355dd5f2d015e4c7f0f5 ---- delete
// delet x id
router.delete('/:productId' , productoAll.deleteProductById)


// exportando
export default router;