import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFieldsType } from "@/types/form"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseCreateUser } from "@/api/authentification"

import {toast} from "react-toastify"
import { useToggle } from "@/hooks/use-toggle"




export const RegisterContainer= ()=>{

   const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const {
        handleSubmit,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>()

    const handleCredentialUserAuthentification = async (
        {email,password,how_did_hear}:RegisterFormFieldsType) => {
        const {error,data} = await firebaseCreateUser(email,password)

        if(error){
            setIsloading(false)
            toast.error(error.message);
            (error)
            return
        }

        //...to to créer les documents des utilisateurs

        toast.success("Bienvenue dans l'application singes codeurs");
        console.log(data)
        setIsloading(false)
        reset()

        
       }

    

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formeData) =>{
        setIsloading(true)
       

        const{password} = formeData;
        if(password.length <= 5){
            setError("password",{
                type:"manuel",
                message:"Ton mot de passe doit comporter au minimum 6 caractères"
            });
            setIsloading(false)
            return
        }
        handleCredentialUserAuthentification(formeData)

        
    }
    return(
    <>
      
      <RegisterView
        form={{
            errors,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}
        />
    </>
    )
}