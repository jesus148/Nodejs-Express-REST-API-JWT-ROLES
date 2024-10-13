

// endspoints con los usuarios , crear un nuevo usuario . eliminar 

import {  Router} from 'express';

// importando nombrada y x default
import * as userCtrl from '../controllers/user.controller';
import { authjwt , verifySignUp } from '../middlewares';

const router = Router()

// controller para crear un usuario 
// parecido al authjwt.routes.js
// solo el adminn puede hacerlo


// http://localhost:4000/api/users ---post
router.post('/' , [
    authjwt.verifyToken
    ,authjwt.isAdmin
    ,verifySignUp.checkRolesExisted
],
userCtrl.CreateUser);


export default router;