

// LOGICA DEL SERVER 
// configuracion de la apliacion luego se lo pasa al index.js

import express from 'express';
import morgan from 'morgan'; //info del rest
import helmet from 'helmet';
import pkg from '../package.json'; //get data package.json

//routes
import  productsRouter  from './routes/products.routes';
import authCtrl from './routes/auth.routes';
// import {createRoles , createAdmin} from './libs/initialSetup';
import userRoutes from './routes/user.routes';


// create app
const app = express();
    


// para setear variables , osea una variable y le pones un valor 
// package.json
app.set('pkg', pkg)
app.set('port',process.env.PORT || 4000)
// "json spaces"
// las respuestas sean más fáciles de leer cuando se visualizan en una herramienta de depuración o en el navegador.
app.set('json spaces', 4)





// cualquiere peticion rest lo captura y lo muestra
// dev : info del rest
// helmet:para confidencialidad , en caso te olvides de valida algo lo completa
app.use(helmet());
app.use(morgan('dev'))



// data en json del front a la back 
app.use(express.json());
// express.urlencoded
// // datos del front a traves de formularios
// Cuando una solicitud HTTP envía datos en un formato de formulario (como al usar un <form> en HTML con el método POST), este middleware permite a Express analizar esos datos y añadirlos al objeto req.body para que puedas acceder a ellos fácilmente en tus rutas. 
// extended: false: Adecuado para formularios simples.
// extended: true: Permite datos más complejos en formularios (útil si necesitas recibir arrays u objetos en el formulario).
app.use(express.urlencoded({extended:false}))


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