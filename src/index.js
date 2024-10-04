

// esto file sirve para arrancar la app todo 

import app from './app';
import   './database';

// puerto
app.listen(4000);

// consola
console.log('server on port ' , 4000);