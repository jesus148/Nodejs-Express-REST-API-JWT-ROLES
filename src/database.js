
// tener la coneccion de la bd o crea la conexion a la bd

import mongoose from 'mongoose';

// > poner esto con esto creara tu bd manualmente : "mongodb://localhost/companydb
// en caso salga error poner 
// mongodb://localhost:27017/companydb , depende de tu puerto y crear la bd o collecion

mongoose.connect("mongodb://localhost/companydb")
   .then(db => console.log("db is connect"))
   .catch(error => console.log(error))