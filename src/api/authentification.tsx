import { auth } from "@/config/firebase-config"
import { error } from "console"
import { FirebaseError } from "firebase/app"
import { createUserWithEmailAndPassword } from "firebase/auth"

export const firebaseCreateUser = async (email:string,password:string) =>{
    try{

        const userCredential = await createUserWithEmailAndPassword(auth,email,password)

        return {data: userCredential.user}
    }catch(error){
        //@... format l'error
        const firebaseError = error as FirebaseError
        return {error:{
            code:firebaseError.code,
            message: firebaseError.message
        }
 
    };
}
}