import { LoginFormFieldsType } from "@/types/form";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { useState } from "react";

export const LoginContainer= ()=>{
    const [isLoading,setIsloading] = useState<boolean>(false);
    const {
        handleSubmit,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<LoginFormFieldsType>()
    const onSubmit: SubmitHandler<LoginFormFieldsType> = async (formeData) =>{
        setIsloading(true)
        console.log('formData',formeData)
    }
    return(
        <LoginView
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