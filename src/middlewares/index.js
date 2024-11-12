

// este js exportara los los files de midleware authjwt.js y el verifySignup.js



// importnaod de manera individual
// import {verifyToken} from "./authjwt";
// // exportando
// export {verifyToken}

// importando todo 
import * as authjwt from "./authjwt";
import * as verifySignUp from './verifySignUp';
import * as validateFied from './validateFied';


// exportas
export {authjwt , verifySignUp , validateFied}