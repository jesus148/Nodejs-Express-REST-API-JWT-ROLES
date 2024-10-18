

// endspoints con los usuarios , crear un nuevo usuario . eliminar 

import {  Router} from 'express';
import { check , body} from 'express-validator';

// importando nombrada y x default
import * as userCtrl from '../controllers/user.controller';
import { authjwt , verifySignUp } from '../middlewares';
import {  validateField} from '../middlewares/validateFied';

const router = Router()

// controller para crear un usuario 
// parecido al authjwt.routes.js
// solo el adminn puede hacerlo


// http://localhost:4000/api/users ---post
router.post('/' , [
    authjwt.verifyToken //verifica el token
    ,authjwt.isAdmin //verifica si es admin
    ,verifySignUp.checkRolesExisted //verifica si el rol existe
    ,body('email').notEmpty().isEmail() //verifica si es un email y no esta vacio
    ,validateField //valida errores de los request
],
userCtrl.CreateUser);


export default router;



// http://localhost:4000/api/users   ---post
// {
//     "username":"idat",
//     "email":"idat@arroba.com",
//     "password":"jesus3",
//     "roles":["user","admin"]
// }