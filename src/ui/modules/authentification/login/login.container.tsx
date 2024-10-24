import { LoginFormFieldsType } from "@/types/form";
import { LoginView } from "./login.view"
import { SubmitHandler, useForm } from "react-hook-form";
import { useToggle } from "@/hooks/use-toggle";

import { firebaseSignInUser } from "@/api/authentification";
import { toast } from "react-toastify";
import { useRouter } from "next/router";



export const LoginContainer= ()=>{
    const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const router = useRouter()

  

    const handleSignInUser = async({email,password}: LoginFormFieldsType) => {
        const {error} = await firebaseSignInUser(email,password)

        if(error){
            setIsloading(false)
            toast.error(error.message)
            return;
        }
        toast.success("bienvenue sur coders monkey")
        setIsloading(false)
        router.push("/mon-espace")
    }

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
        const {password} = formeData

        if(password.length <= 5){
            setError("password",{
                type:"manuel",
                message:"Ton mot de passe doit comporter au minimum 6 caractères"
            });
            setIsloading(false)
            return
        }
        handleSignInUser(formeData);
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