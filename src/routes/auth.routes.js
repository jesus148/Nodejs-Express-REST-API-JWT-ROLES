

// autenticacion 

import {  Router} from 'express';
import * as authCtrl  from '../controllers/auth.controller';



const router = Router()

// router para los usuarios





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
router.post('/signup' , authCtrl.singUp );



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