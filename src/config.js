

import { config } from "dotenv";

config();

// VARIABLE DE ENTORNO 




// ruta de la bd
// process.env : para q puedeas usar en todo tu proyecto
export const MONGODB_URI =
  process.env.MONGODB_URI || "mongodb://localhost/companydb";

  // puerto 
export const PORT = process.env.PORT || 4000;

// firma para el token 
export const SECRET = "products-api";


// datos del admin para crear 1 x default
// process.env : para q puedeas usar en todo tu proyecto
export const ADMIN_EMAIL = process.env.ADMIN_EMAIL || "admin@localhost";
export const ADMIN_USERNAME = process.env.ADMIN_USERNAME || "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD || "admin";



// configurar la bd , usuario y puerto de la bd , 
// en este caso pondremos un file para el token

// clave para el token
// es la firma del token para verifica el token si es valido 
export default {
    SECRET : 'products-api'
}


