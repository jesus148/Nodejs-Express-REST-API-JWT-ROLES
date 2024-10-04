

// LOGICA DEL SERVER 
// configuracion de la apliacion luego se lo pasa al index.js

import express from 'express';
import morgan from 'morgan'; //info del rest
import pkg from '../package.json'; //get data package.json
import  productsRouter  from './routes/products.routes';



// create app
const app = express();


// para setear variables , osea una variable y le pones un valor 
// package.json
app.set('pkg', pkg)





// cualquiere peticion rest lo captura y lo muestra
// dev : info del rest
app.use(morgan('dev'))



// data en json del front a la back 
app.use(express.json());


// metodo rest get
// http://localhost:400/  ---get
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
app.use( '/products', productsRouter)






// exportando pa q lo use en el indexe.js 
export default app;