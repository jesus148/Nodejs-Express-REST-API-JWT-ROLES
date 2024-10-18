

// esto file sirve para arrancar la app todo 

import app from './app';
import   './database';
import {PORT} from './config.js'

// puerto
// app.listen(4000);

// puerto con variables de entorno 
app.listen(PORT);


// consola
console.log('server on port' , 4000);