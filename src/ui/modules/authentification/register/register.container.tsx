import { SubmitHandler, useForm } from "react-hook-form"
import { RegisterView } from "./register.view"
import { RegisterFormFieldsType } from "@/types/form"

export const RegisterContainer= ()=>{
    const isLoading = false
    const {
        handleSubmit,
        control,
        formState:{ errors },
        register,
        setError,
        reset,
    } = useForm<RegisterFormFieldsType>()

    const onSubmit: SubmitHandler<RegisterFormFieldsType> = async (formeData) =>{
        console.log('formData',formeData)
    }
    return(
        <><RegisterView
        form={{
            errors,
            control,
            register,
            handleSubmit,
            onSubmit,
            isLoading
        }}
        /></>
    )
}