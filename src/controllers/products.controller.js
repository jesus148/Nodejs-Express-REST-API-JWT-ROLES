import Product from '../models/Product';

// CONTROLLLER DE PRODUCTOS 


// para crear un producto
export const createProducs = async(req , res )=>{

    // destructurando la data del req
    const {name , category , price , imgUrl} = req.body;

    // creando un objeto 
    const newProduct = new Product({name , category , price, imgUrl })

    // guardando el producto    
   const productSaved = await newProduct.save();

//    response al cliente
    res.status(201).json(productSaved);
}





// metodo obtiene todo
export const getProducts =async (req , res )=>{
    const products = await Product.find();
    res.json(products)
}






// metodo para obtner product x id
export const getProductsById = async(req , res)=>{
    // encuenta x id de la colleccion 
    // productId : igual en router del product
    const product =await Product.findById(req.params.productId);
    // response al cliente
    res.status(200).json(product)
}







// actualizando un producto 
export const updateProductBy = async(req , res )=>{
    // encuentra y actualiza
    // req.params.productId : 1 parametro , primero busca , el productId = en el router 
    // req.body : luego actualiza
    // {new:true}: es para obtener el producto actualizado y se agrega en la constante productUpdate
    const productUpdate = await Product.findByIdAndUpdate(req.params.productId , req.body,{
        new: true
    })

    // response al cliente
    res.status(200).json(productUpdate)
}





// eliminado un producto x id
export const deleteProductById = async(req , res )=>{
    
    // desestructurando , obteniendo el parametro 
    const {productId}= req.params;

    await Product.findByIdAndDelete(productId);

    res.status(200).json();

}