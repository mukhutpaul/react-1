import { useState } from "react";
import { ForgotPasswordView } from "./forgot.password.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { ForgetFormFieldsType } from "@/types/form";
import { useToggle } from "@/hooks/use-toggle";

export const ForgotPasswordContainer= ()=>{ 
    const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const {
        handleSubmit,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<ForgetFormFieldsType>()
    const onSubmit: SubmitHandler<ForgetFormFieldsType> = async (formeData) =>{
        setIsloading(true)
        console.log('formData',formeData)
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