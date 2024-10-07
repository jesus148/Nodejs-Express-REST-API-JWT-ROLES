

// autenticacion 

import {  Router} from 'express';
import * as authCtrl  from '../controllers/auth.controller';



const router = Router()

// router para los usuarios

// http://localhost:4000/api/auth/signup   ---post
// {
//     "username":"jesus3",
//     "email":"jesu3.com",
//     "password":"jesus3",
//     "roles":["admin","moderator"]
// }
// headers > Content-Type >application/json
router.post('/signup' , authCtrl.singUp );



// http://localhost:4000/api/auth/signin ---post
// {
//     "email":"jesu3.com",
//     "password":"jesus3"
// }
// headers > Content-Type >application/json
router.post('/signin' , authCtrl.signini);



export default router;