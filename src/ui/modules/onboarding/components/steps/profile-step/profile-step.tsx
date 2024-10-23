import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { Containers } from "@/ui/components/container/container"
import { OnboardingTabs } from "../../tabs/onboardingTabs"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"
import { OnBoardingFooter } from "../../footer/onboarding-footer"
import { ProfileStepForm } from "./profile-step-form"
import { useEffect, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { OnBoardingProfileFormFieldsType } from "@/types/form"
import { useToggle } from "@/hooks/use-toggle"
import { FireStoreUpdateDocument } from "@/api/firestore"
import { useAuth } from "@/context/authUserContext"
import { toast } from "react-toastify"

export const ProfielStep = ({
    
    prev,
    next,
    isFirstStep,
    isFinalStep,
    getCurrentStep,
    stepsList
}:BaseComponentProps) =>{
    const { value: isLoading,setValue: setIsloading,toggle}=useToggle();
    const {authUser} = useAuth()

    const {
        handleSubmit,
        control,
        formState: {errors},
        register,
        reset,
        setValue,
    } = useForm<OnBoardingProfileFormFieldsType>();
    const {displayName,expertise,biography}=authUser.userDocument

    useEffect(() => {

        const fieldsToUpdate:("displayName" | "expertise" | "biography")[] =[
            "displayName",
            "expertise",
            "biography"
        ]

        for(const field of fieldsToUpdate){
            setValue(field, authUser.userDocument[field])
        }
        
    },[])

    const handleUpdateUserDocument = async(
        formdata: OnBoardingProfileFormFieldsType
    ) => {
        
        const {error} = await FireStoreUpdateDocument(
            "users",
            authUser.uid,
            formdata
        ); 
        if(error){
            setIsloading(false)
            toast.error(error?.message)
            return
        }
        setIsloading(false)
        reset()
        next()
    }

    const onSubmit:SubmitHandler<OnBoardingProfileFormFieldsType> = async(formData) =>{
        setIsloading(true)
        console.log("formData",formData)
        handleUpdateUserDocument(formData) 
    }
    
    return(
        <div className="relative h-screen pb-[91px] ">
        <div className="h-full overflow-auto">
            <Containers className="grid h-full grid-cols-12">
                <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                    <div className="w-full space-y-5 pb-4.5">
                        <OnboardingTabs tabs={stepsList} getCurrentStep={getCurrentStep}/>
                        <Typography variant="h1" component="h1">
                            Presente-toi!
                        </Typography>
                        <Typography variant="body-base" component="p" theme="gray">
                            Dis nous tout sur toi! remplis notre formulaire de présentation pour
                            qu'on puisse mieux te connaitre. On veut savoir qui tu es, ce que tu fais 
                            et comment tu as atterri ici. Plus on en saura sur toi, mieux on pourra
                            personaliser ton expérience sur notre plateforme.
                            
                        </Typography>
                    </div>
                    
                </div>
                
                <div className="relative flex items-center h-full col-span-6">
                    <div className="flex justify-end w-full ">
                    <ProfileStepForm
                    form={
                        {
                        errors,
                        control,
                        register,
                        onSubmit,
                        handleSubmit,
                        isLoading,
                            
                        }
                        
                    }
                    
                    />
                    </div>
                      
                </div> 
                

                  
            </Containers>
        
        </div> 

     <OnBoardingFooter 
     prev={prev}
     next={handleSubmit(onSubmit)} 
     isFirstStep={isFirstStep}
     isFinalStep={isFinalStep}
     isLoading={isLoading}
     
     /> 
    </div>
)

}