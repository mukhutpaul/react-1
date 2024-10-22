import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFieldsType } from "@/types/form"
import { useEffect, useState } from "react"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { firebaseCreateUser, sendEmailVerificationProcedure } from "@/api/authentification"

import {toast} from "react-toastify"
import { useToggle } from "@/hooks/use-toggle"
import { FireStoreCreateDocument } from "@/api/firestore"





export const RegisterContainer= ()=>{

   const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const {
        handleSubmit,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>()

    const handleCreateUserDocument = async(collectionName:string,documentID:string,document:object) => {
            const {error} = await FireStoreCreateDocument(collectionName,documentID,document)

            if(error){
                toast.error(error.message)
                setIsloading(false)
                return
            }
            toast.success("Bienvenue dans l'application singes codeurs");
            setIsloading(false)
            reset()
            sendEmailVerificationProcedure()
    }

    const handleCredentialUserAuthentification = async (
        {email,password,how_did_hear}:RegisterFormFieldsType) => {
        const {error,data} = await firebaseCreateUser(email,password)

        if(error){
            setIsloading(false)
            toast.error(error.message);
            (error)
            return
        }

        const userDocumentData = {
            email:email,
            how_did_hear: how_did_hear,
            uid:data.uid,
            creation_date: new Date()
        }

        handleCreateUserDocument("users",data.uid,userDocumentData)

       

        
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