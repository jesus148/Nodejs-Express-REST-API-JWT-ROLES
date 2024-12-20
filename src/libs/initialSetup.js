
import { ADMIN_EMAIL, ADMIN_PASSWORD, ADMIN_USERNAME } from '../config';
import Role from '../models/Role';
import User from '../models/User';

// este metodo se ejecuta automatico al inicar la app 


// para crear los roles de los usuario
export const createRoles = async()=>{
// ok
try{ 
    // contando los objetos creados role si existen 
    const count = await Role.estimatedDocumentCount();

    // // si hay se queda aqui
    if(count > 0) return;

    // creacion de roles auto , todo en uno 
    // promisea.all: El Promise.all() El método devuelve una única promesa de una lista de promesas. cuando todas las promesas se cumplan. , osea dentro de 1 promesa se ejecutan varias promesas
    const values = await Promise.all([
        new Role({name:'user'}).save(),
        new Role({name:'moderator'}).save(),
        new Role({name:'admin'}).save()
    ])

    // error
}catch(err){
    // print dev
    console.log(err);
}
}



// creare los admin solo 1
export const createAdmin = async ()=>{

    // busca el admin si existe
    const userFound = await User.findOne({email : ADMIN_EMAIL});
    // printer
    //  console.log(userFound);

    // finaliza
    if(userFound) return;

    // busca los roles admin y moderator
    // $in : si esta ingresado
    const roles = await Role.find({ name : {$in : ["admin", "moderator"]}})


    // creamos el usuario
    const newUser = await User.create({
        // asignamos sus valores
        username: ADMIN_USERNAME,
        email:ADMIN_EMAIL,
        password:ADMIN_PASSWORD,
        // agregamos roles solo los id
        roles: roles.map( (role => role._id))
    })

    // printer
    console.log(`new user created : ${newUser.email} `)

}

createRoles();
createAdmin();


