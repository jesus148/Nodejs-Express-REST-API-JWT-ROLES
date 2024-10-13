
import Role from '../models/Role';

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