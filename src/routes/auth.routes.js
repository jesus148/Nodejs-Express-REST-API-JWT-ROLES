

// autenticacion 

import {  Router} from 'express';
import * as authCtrl  from '../controllers/auth.controller';
import User from '../models/User';
import {verifySignUp} from '../middlewares';


const router = Router()

// router crear para los usuarios
// es parecido al User.routes.js solo q este este crea usuarios no ese nesecario ser admin cualquier rol lo puede hacer





// metodo crear
// usuario con roles 
// http://localhost:4000/api/auth/signup   ---post
// {
//     "username":"jesus3",
//     "email":"jesu3.com",
//     "password":"jesus3",
//     "roles":["admin","moderator"]
// }
// headers > Content-Type >application/json
// lleva midlewares 
router.post('/signup' , [verifySignUp.checkDuplicatedUsernameOrEmail , verifySignUp.checkRolesExisted],authCtrl.singUp );



// metodo entrar
// http://localhost:4000/api/auth/signin ---post
// {
//     "email":"jesu3.com",
//     "password":"jesus3"
// }
// headers > Content-Type >application/json
router.post('/signin' , authCtrl.signini);



// exportando
export default router;





// http://localhost:4000/api/auth/signup   ---post
// creando un user simple  con rol user
// {
//     "username":"wendy",
//     "email":"wendy",
//     "password":"wendy"
// }
// headers > Content-Type >application/json