

import jwt from 'jsonwebtoken';
import config from '../config'
import User from '../models/User';
import Role from '../models/Role';

// metodo validar el token 
// este metodo se usa en solo ciertos rest x ejemplo el delete , post , y el put 
// el resto no es nesecario depende de cada developer

export const verifyToken = async ( req , res , next) =>{



    // todo ok 

            // en la cabezera deberas poner el token
    // x-acces-token : con esa estructura
    const token = req.headers["x-acces-token"]



    // si no existe el token 
    if(!token) return res.status(403).json({message:"no token provider"})


    try{     
    // verificando el token del cliente con la firma q fue creada ese token
    // recordar q el token tiene el id agregado de un usuario
    // verifica el tiempo o expiracion 
    // si todo es correcto el jwt.verify devuelve el payload original(q contiene el id )
    const decode = jwt.verify(token , config.SECRET)

    // agregando un nuveo campo al req req.userId con el id del token  
    req.userId =decode.id;
        
        // verifica si si encuentra
        // {password:0} : cuando encuentre x el id el password no debe ser devuelto osea lo excluye
    const user = await User.findById(req.userId, {password:0})

     // verifica el id si existe en la bd
    if(!user) return res.status(404).json({message :'no user found'})

    // continua con la sgt ruta o metodo
    next();

    // si hay error 
    } catch (error) {
        return res.status(401).json({message :'unauthorized'})
    }

}




// verifica si es moderador
export const isModerator = async (req , res , next) =>{


    try {
        // el req del metodo verifyToken tiene el id lo usaremos aqui
        // y buscamos todo del usuario de ese id se agrega en la const
        const user = await User.findById(req.userId)
    
        // {$in : user.roles : busca los id roles incluidos del user en el role
        // user.roles : el id del rol de ese usuario 
        // osea busca los roles de ese usuario 
        // roles en la consta se agrega 1 rol o varios como un array
        const roles = await Role.find({_id :{$in : user.roles}}) 
    
        // si cuenta con roles hace un for
        for(let i = 0; i < roles.length ; i++){
            // verifica si es moderador
            if(roles[i].name === "moderator"){
                    next(); //pasa 
                    return; //y destruye
            }
        }
        
        // devuuelve al front si no encuetra roles moderador
        return res.status(403).json({message : "Requiere role de moderador"})
    } catch (error) {
        return res.status(500).send({message:error})
    }

}




// verifica si admin 
export const isAdmin = async (req , res , next) =>{

    // todo ok
    try {
            // el req del metodo verifyToken tiene el id lo usaremos aqui
    // y buscamos todo del usuario de ese id se agrega en la const
    const user = await User.findById(req.userId)

    // {$in : user.roles : busca los id roles incluidos del user en el role
    // user.roles : el id del rol de ese usuario 
    // osea busca los roles de ese usuario 
    // roles en la consta se agrega 1 rol o varios como un array
    const roles = await Role.find({_id :{$in : user.roles}}) 

    // si cuenta con roles hace un for
    for(let i = 0; i < roles.length ; i++){
        // verifica si es moderador
        if(roles[i].name === "admin"){
                next(); //pasa 
                return; //y destruye
        }
    }
    // devuuelve al front si no encuetra roles admin
    return res.status(403).json({message : "Requiere role de administrador"})

    // error
    } catch (error) {
        return res.status(500).send({message: error})
    }
    


}