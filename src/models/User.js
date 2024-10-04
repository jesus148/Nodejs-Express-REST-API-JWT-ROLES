
import {Schema , model} from 'mongoose';

// clase para los usuarios

new Schema({
    username:{
        type:String, //string tipo de dato
        unique:true // valor unico
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String,
        unique:true
    },
    // collecion de roles
    // para los roles
    // cada objeto va tener una relacion
    // ref: referencia o relacionado con otro modelo de datos(en este caso el modelo usario relacionado con roles)
    roles:[{
        ref:"Role",//hace referencia a Role.js
        // tipo de dato debe ser un id del Role.js
        type:Schema.Types.ObjectId  //de ese Role.js sera de tipo de dato el id de la collecion , lo q guarda es un id
    }]
})