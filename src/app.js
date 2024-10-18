

// LOGICA DEL SERVER 
// configuracion de la apliacion luego se lo pasa al index.js

import express from 'express';
import morgan from 'morgan'; //info del rest
import helmet from 'helmet';
import pkg from '../package.json'; //get data package.json
import  productsRouter  from './routes/products.routes';
import authCtrl from './routes/auth.routes';
import {createRoles , createAdmin} from './libs/initialSetup';
import userRoutes from './routes/user.routes';

// create app
const app = express();
    

// metodo crea los roles auto al inciar la app
createRoles();
createAdmin();



// para setear variables , osea una variable y le pones un valor 
// package.json
app.set('pkg', pkg)
app.set('port',process.env.PORT || 4000)





// cualquiere peticion rest lo captura y lo muestra
// dev : info del rest
app.use(helmet());
app.use(morgan('dev'))



// data en json del front a la back 
app.use(express.json());


// metodo rest get
// http://localhost:4000/ ---get
app.get('/' , (req, res)=>{
    res.json({
        // app.set('pkg', pkg) : se usa para mostrar en la vista la data del package
            name: app.get('pkg').name,
            author:app.get('pkg').author,
            description:app.get('pkg').description,
            version:app.get('pkg').version
    })
})




// router products
app.use( '/api/products', productsRouter)

// router user
app.use( '/api/auth', authCtrl)


// router users crea solo el admin
app.use('/api/users' , userRoutes)






// exportando pa q lo use en el index.js 
export default app;