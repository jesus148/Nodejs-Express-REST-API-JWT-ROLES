
import User from '../models/User';
import config from '../config';
import jwt from 'jsonwebtoken';
import { token } from 'morgan';
import Role from '../models/Role';

// controller para logica del usuario 


// metodo registrarse
export  const singUp = async (req , res)=>{

    // todo ok
    try {
        // destructurando el request
    const {username, email, password , roles}= req.body;


    // creando la instancia y completando datos
    const newUser = new User({
        username,
        email,
        // ecncryptPassword : metodo en la clase guia lo encripta
        password: await User.ecncryptPassword(password)
    })



    // verificando los roles si existe
    if(roles){
        // busca el rol del request en la bd y lo guarda en la const
        // but guarda todo el objeto o un array en caso sea 2 roles 
        const foundRoles = await Role.find({name : {$in : roles}})

        // del foundRoles solo quiero el id y lo agrega al objeto newUser
        newUser.roles = foundRoles.map(role => role._id)

        // si no envia un rol
    }else {
        // busca el user y guarda el objeto en la const
        const role = await Role.findOne({name :"user"})
        // agrega al objeto newUser
        newUser.roles = [role._id]
    }


    // registrando
    // savedUser se guarda todo el objeto registrado , devuelve el objeto registrado
    const savedUser = await newUser.save();
    console.log(savedUser);

    //creando el token 
    // {id:savedUser._id} : se guarda el id , seria la cabecera o el payload
    // config.SECRET : la firma del token
   const token = jwt.sign({id:savedUser._id} , config.SECRET, {
        expiresIn:86400//1 dia - 24 horas
    })

    // dev print
    console.log(newUser);

    // return vista
    res.status(200).json({token})

    // error
    } catch (error) {
        return res.status(500).json(error.message)
    }
}



// metodo actualizar 

export const updateUser = async( req , res)=>{
        const userUpdate= await User.findByIdAndUpdate(req.params.userId, req.body,{
            new:true
        });
        res.status(200).json(userUpdate);
}








// metodo ingresar
export  const signini = async (req , res)=>{
    // todo ok
    try {
         // busca el objeto por el email del request
    // populate("roles") : trae todo el array de roles de ese usuario encontrado
    const user = await User.findOne({email : req.body.email}).populate("roles");


    // verifica si el usuario existe
    if(!user) return res.status(400).json({message:"User not found"})

        // verifica el password
        // req.body.password : contraseña en plano
    const matchPassword = await User.comparePassword(req.body.password , user.password)    

    // si no es = el password
    if(!matchPassword) return res.status(401).json({token : null , message : 'invalid password'})



    //creando el token 
    // {id:savedUser._id} : se guarda el id ,  seria la cabecera o el payload
    // config.SECRET : la firma del token
    const token = jwt.sign({id: user._id} , config.SECRET, {
        expiresIn:86400//1 dia - 24 horas
    })

    
    // enviando el token a la vista
    res.json({token})

    // error
    } catch (error) {
        console.log(error);
    }

}


