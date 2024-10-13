

import {Schema , model} from 'mongoose';

// clase para los roles



// este clase solo deberia tener estos roles
export const ROLES = ["user", "admin", "moderator"];

// esto es para crear la instancia
const roleSchema = new Schema({
      // creara un id por defecto
    // luego crea estos campos
    name :String
},{
  versionKey:false // para q cuando se crea el documento no aparezca el subguion 
})


// exportando para usar los metodos de la bd
// al crear en la bd , roles : asi lo crea asi la coleccion 
export default model('Role' , roleSchema)