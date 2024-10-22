import { useState } from "react";
import { ForgotPasswordView } from "./forgot.password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetFormFieldsType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";
import { sendEmailToResetPassword } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

export const ForgotPasswordContainer= ()=>{ 
  const router = useRouter()
    const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const {
        handleSubmit,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<ForgetFormFieldsType>()

    const handleResetPassword = async ({email}:ForgetFormFieldsType) =>{
      const {error} = await sendEmailToResetPassword(email)

      if(error){
        setIsloading(false)
        toast.error(error.message)
        return;
      }
      toast.success(`un email a été envoyé à l'adresse ${email}`)
      setIsloading(false)
      reset()
      router.push("/connexion");

          
    }


    const onSubmit: SubmitHandler<ForgetFormFieldsType> = async (formeData) =>{
        setIsloading(true)
       
        handleResetPassword(formeData)
    }
    return(
      <ForgotPasswordView
      form={{
        errors,
        register,
        handleSubmit,
        onSubmit,
        isLoading
    }}
      />
    )
}