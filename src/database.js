


// 1 forma de ejecutar la bd
// tener la coneccion de la bd o crea la conexion a la bd
// recordar cualquiera q usa el mongoose ya estara interactuando con la bd , x ejemplo en los modelos y controllers

// =========descomentar esto
// import mongoose from 'mongoose';

// // > poner esto con esto creara tu bd manualmente : "mongodb://localhost/companydb
// // companydb : es la bd
// // en caso salga error poner 
// // mongodb://localhost:27017/companydb , depende de tu puerto y crear la bd o collecion

// mongoose.connect("mongodb://localhost/companydb")
//    .then(db => console.log("db is connect"))
//    .catch(error => console.log(error))






//  2 forma de ejecutar la bd 

import mongoose  from "mongoose"

import {MONGODB_URI} from "./config.js"



// conexion a base de datos
mongoose.connect(MONGODB_URI)
   .then( (db) => {
      console.log("db is connect"
      )})
   .catch(( error ) => {  
      console.log(error)
   })
