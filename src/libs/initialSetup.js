
import Role from '../models/Role';

// este metodo se ejecuta automatico

export const createRoles = async()=>{
// ok
try{ 
    // contando los objetos creados role
    const count = await Role.estimatedDocumentCount();

    // // si hay se queda aqui
    if(count > 0) return;

    // creacion de roles auto , todo en uno 
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