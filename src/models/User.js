
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
    return await bcrypt.compare(password , receivePassword);
}



// exportando
// interaccion con la bd
export default model("User", userSchema);