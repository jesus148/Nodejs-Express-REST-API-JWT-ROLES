

// importando monngoose
    import {Schema, model} from 'mongoose';



// CLASE GUIA PRODUCTOS 
// creando de forma simple los atributos 
// el esquema es la estructura
// clase guia de products, con esto se crea la instancia
// // ========
// const productSchema = new Schema({
//     // creara un id por defecto
//     // luego crea estos campos
//     name:String,
//     category:String,
//     price:Number,
//     imgUrl:String //dirrecion de la img
// },{
//     timestamps:true, //fecha de la creacion ya actualizacioon
//     versionKey:false // para q cuando se crea el documento no aparezca el subguion 
// })
// // =========



// CLASE GUIA PRODUCTOS 
// creando de forma simple los atributos 
// el esquema es la estructura
// clase guia de products, con esto se crea la instancia
// ========
const productSchema = new Schema({
    // creara un id por defecto
    // luego crea estos campos
    name:{
        type:String, //tipo de dato
        required:true, //requerido
        trim:true   //elimina espacios
    },
    category:String,
    price:{
        type:Number,
        default:0   //por default
    },
    imgUrl:String //dirrecion de la img
},{
    timestamps:true, //fecha de la creacion ya actualizacioon
    versionKey:false // para q cuando se crea el documento no aparezca el subguion 
})
// =========



// se crea un modelo llamado 'Product'  , pero products , 1 letra en minuscula y le agrega una s al final
//  esto lo crea en mongodb una coleccion
// y aqui con el model tenemos los metodos para el manejo en la bd
export default model('Product' , productSchema)