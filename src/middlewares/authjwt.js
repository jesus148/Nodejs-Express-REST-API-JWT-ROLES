

import jwt from 'jsonwebtoken';
import config from '../config'

// metodo validar el token 

export const verifyToken = async ( req , res , next) =>{
    console.log("test")

    // en la cabezera deberas poner el token
    // x-acces-token : con esa estructura
    const token = req.headers["x-acces-token"]

    // print console
    console.log(token)

    // si no existe el token 
    if(!token) return res.status(403).json({message:"no token provider"})


    // verificando el token con un token 
    jwt.verify(token , config.SECRET)    

    // continua con la sgt ruta o metodo
    next();
}