

// metodo para validar en forma general
// si el correo es valido u otro campo

import {ROLES} from '../models/Role'
import User from '../models/User'





// verifica q no se repitan los user y email
export const checkDuplicatedUsernameOrEmail = async(req, res, next)=>{

    try {
        // verificando q el user no se repita
        // req.body.username: obtteniendo del request
        const user = await User.findOne({username : req.body.username})
        if(user) return res.status(400).json({
            message:'the user already exists'
        })
    
        // verificando q el email no se repita
        // username : req.body.email : otbeniendo del request
        const email = await User.findOne({email : req.body.email})
        if(email) return res.status(400).json({
            mesage:'the email already exist'
        })
        
        next();
    } catch (error) {
        res.status(500).json({mesage : error.mesage})
    }


}







// verificar si existen los roles en la bd o en la clase modelo
export const checkRolesExisted=(req , res , next)=>{



    // verifiando si el request del cliente tiene roles 
    if(!req.body.roles) return res.status(400).json({message:"no roles"})


 
        // verificando si esos roles existen para insertar en la bd
        // haciendo un for a los roles
        // haciendo un for a los roles del request
        for(let i=0; i < req.body.roles.length ; i++){
            // verifica si no esta incuido el ROLES dentro del request son 3 roles
            // ROLES : es un array estatico en el models de roles q debe tener para registrar tambien lo puedes poner en la bd
            if(!ROLES.includes(req.body.roles[i])){
                return res.status(404).json({
                    message:`Role ${req.body.roles[i] } no existe`
                })
            }
        }

    
    // si no tiene roles continua , en el metodo controller se agrega el x default
    next();
}