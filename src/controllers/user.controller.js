

import User from '../models/User.js';
import Role from '../models/Role.js';


// metodo crear el usuario solo lo crea el admin
export const CreateUser = async (req , res) => {
    
    // todo ok
    try {

        // desestructurando
        const {username , email , password , roles} = req.body;


        // verificando el usuario existe 
        const searchUser = await User.findOne({username:username})
        if(searchUser){
            // retorna al cliente
            return res.status(400).json({
                msg:`ya existe el usuario con el nombre ${username}`
            })
        }



        // buscando y encontrando los roles 
        // $in :roles :  son los name roles de los usuarios
        // rolesfound se guarda roles 1 o varios
        const rolesfound = await Role.find({ name: {$in :roles}})

        const user = new User({
            username, 
            email, 
            password,
            // si hay roles hace un .map y lo guarda el id
            roles:rolesfound.map((role)=>role._id)
        })

        // encriptanda la contraseña y lo agrega al objeto
        user.password = await User.ecncryptPassword(user.password);


        // guarda el objeto
        // el objeto guardado se amacena en saveduser
        const savedUser = await user.save();


        // return al cliente
        return res.status(200).json({
            __id:savedUser._id,
            username:savedUser.username,
            email:savedUser.email,
            roles:savedUser.roles
        })


    } catch (error) {
        // printer error
        console.log(error);
    }
}


// metodo obtiene todos los usuario
export const getUsers= async(req , res)=>{
    // encuentra todo
    const users = await User.find();
    return res.json(users);
}


// metodo obtiene un usuario x id
export const getUser = async (req, res) =>{

    // encuentra por el id
    const user = await User.findById(req.params.userId);
    // return cliente
    return res.json(user);
}