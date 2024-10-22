import { db } from "@/config/firebase-config";
import { FirebaseError } from "firebase/app";
import { doc, updateDoc,setDoc } from "firebase/firestore";


export const FireStoreCreateDocument = async (collectionName:string,documentID:string,data:object) =>{
    
    try{

        const documentRef = doc(db, collectionName, documentID);
        await setDoc(documentRef,data);

        return {data: true};
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

export const FireStoreUpdateDocument = async (collectionName:string,documentID:string,data:object) =>{

    try{

        const documentRef = doc(db, collectionName, documentID);
        await updateDoc(documentRef,data);

        return {data: true};
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