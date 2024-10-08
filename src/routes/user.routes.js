

// endspoints con los usuarios , crear un nuevo usuario . eliminar 

import {  Router} from 'express';

// importando nombrada y x default
import * as userCtrl from '../controllers/user.controller';
import { authjwt } from '../middlewares';

const router = Router()

// controller para crear un usuario 


router.post('/' , [authjwt.verifyToken] ,  userCtrl.getUser);


export default router;