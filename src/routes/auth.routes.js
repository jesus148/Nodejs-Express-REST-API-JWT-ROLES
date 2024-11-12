

// autenticacion 

import {Router} from 'express';
import * as authCtrl  from '../controllers/auth.controller';
import User from '../models/User';
import {verifySignUp} from '../middlewares';


const router = Router()

// router crear para los usuarios
// es parecido al User.routes.js solo q este este crea usuarios no ese nesecario ser admin cualquier rol lo puede hacer



router.use((req, res, next) => {
    // Access-Control-Allow-Headers: Define qué encabezados personalizados pueden ser enviados por el cliente en las solicitudes.
    // x-access-token: Un encabezado personalizado, generalmente usado para enviar un token de autenticación.  
    // Origin: Encabezado que especifica la fuente del documento que hace la solicitud.
    // Content-Type: Especifica el tipo de contenido (por ejemplo, application/json).
    // Accept: Indica los tipos de contenido que el cliente puede procesar.
    res.header(
      "Access-Control-Allow-Headers",
      "x-access-token, Origin, Content-Type, Accept"
    );
    next();
  });
  




// metodo crear
// usuario con roles 
// http://localhost:4000/api/auth/signup   ---post
// {
    // "username":"jesus3",
    // "email":"jesu3.com",
    // "password":"jesus3",
    // "roles":["admin","moderator"]
// }
// headers > Content-Type >application/json
// lleva midlewares 
router.post('/signup' , [verifySignUp.checkDuplicatedUsernameOrEmail , verifySignUp.checkRolesExisted ] , authCtrl.singUp );






// metodo entrar
// http://localhost:4000/api/auth/signin ---post
// {
//     "email":"jesu3.com",
//     "password":"jesus3"
// }
// headers > Content-Type >application/json
router.post('/signin' , authCtrl.signini);








// http://localhost:4000/api/auth/67322785183dbf3885c9a6ee 
// metodo acutualizar usuario
router.put('/:userId',[ verifySignUp.checkRolesExistedPut] , authCtrl.updateUser);





// exportando
export default router;




// creando un user simple  con rol user
// http://localhost:4000/api/auth/signup   ---post
// creando un user simple  con rol user
// {
//     "username":"wendy",
//     "email":"wendy",
//     "password":"wendy"
// }
// headers > Content-Type >application/json