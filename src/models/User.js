
import bcrypt from "bcryptjs";
import {Schema , model} from 'mongoose';

// clase para los usuarios

// crea la instancia
const userSchema =new Schema({
        // creara un id por defecto
    // luego crea estos campos
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
        // debe recibir un array de roles obligatorio
        ref:"Role",//hace referencia a Role.js
        // tipo de dato debe ser un id del Role.js
        type:Schema.Types.ObjectId  //de ese Role.js sera de tipo de dato el id de la collecion , lo q guarda es un id
    },{
        timestamps:true, //fecha de la creacion ya actualizacioon
        versionKey:false // para q cuando se crea el documento no aparezca el subguion 
    }]
})



// metodos personalizados para otras funciones 
// userSchema.static: el esquema le creas un metodo estatico
// ecncryptPassword : nombre del metodo puedes cambiar el nombre

// encriptat la contraseña
userSchema.statics.ecncryptPassword = async (password) =>{

    // el poder de encriptat 10 veces > mayor el numero lo encripta mas pero el server lo hace un poco lento
    const salt = await bcrypt.genSalt(10);
    // la contraseña del request lo encriptas
    return await bcrypt.hash(password,salt);
}



// compararar las contraseñas
userSchema.statics.comparePassword = async(password , receivePassword)=>{

    // retorna un true o false
    // password es del request esta en formato plano entonces lo encripta con la contraseña encriptada en la bd q es receivePassword
    return await bcrypt.compare(password , receivePassword);
}


// se ejecutan antes de un midleware
// save y otro metodos de registro
// osea cuando la clase modelo user usa algun metodo osea escucha ya sea al crear 
userSchema.pre("save",async function(next){
    
    console.log("test");
    // la clase modelo aqui
    const user= this;
    
    // verifica si no se cambio la contraseña , luego se da next
    // if(!user.isModified("password")){
    //     return next();
    // }

    // // en caso cambio la contraseña se encripta 
    // const hash = await bcrypt.hash(user.password,10);
    // user.password = hash;
    // next();

    // veririficando si hay una modificacion en el password
    // si se modifica aca lo encripta la contraseña 
    // ojo : el password debes ponerlo vacion en el controller
    if(user.isModified('password')){
    const hash = await bcrypt.hash(user.password,10);
    user.password = hash;
    next();
    // si no hay pasa normal
    }else{
        next();
    }
})




// exportando
// interaccion con la bd
export default model("User", userSchema);