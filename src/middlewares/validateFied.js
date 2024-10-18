

import {validationResult} from 'express-validator';


// midleware
// si hay un error en los request esto lo verificara

 const validateField = ( req  , res , next ) =>{
    // todo ok 
    try {

        // errores en los request
        const errors = validationResult(req);

        // si no hay errorres sale true , si hay errore false  
        if(!errors.isEmpty()){
            return res.status(400).json({
                msg:'error en las validaciones',
                errors
            })
        }
        // todo ok continua
        next();

        // error
    } catch (error) {
        console.log(error);

        res.status(500).json({
            msg:'errores'
        })
    }
}


// exportando 
export{
    validateField
}