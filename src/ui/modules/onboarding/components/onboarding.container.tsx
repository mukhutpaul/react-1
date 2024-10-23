import { useState } from "react"
import { OnboardingView } from "./onboarding.view"
import { WelcomeStep } from "./steps/welcom-step/welcom-step";
import { OnboardingStepsListInterface } from "@/types/onboarding-steps-list";
import { ProfielStep } from "./steps/profile-step/profile-step";

export const OnboardingContainer = () => {
    const [currentStep,setCurrentStep]= useState<number>(1);

    console.log("currentStep",currentStep)

   const stepsList:OnboardingStepsListInterface[]  =[ 
    {
        id:1,
        label:"Bienvenue",
        component: {step: WelcomeStep},
    },
    {
        id:2,
        label:"Profile",
        component: {step: ProfielStep },
    },
    {
        id:3,
        label:"Avatar",
        component: {step: ProfielStep },
    },
   
   ]

   const getCurrentStep = () =>{
    return stepsList.find((el) => el.id === currentStep)
   }
  
   const next = () =>{
    if(currentStep < stepsList.length){
        setCurrentStep(currentStep + 1);

    }
   }

   const prev = () =>{
    if(currentStep > 1){
        setCurrentStep(currentStep - 1);

    }
   }

   const isFirstStep = () =>{
    if(currentStep===1){
        return true
    }else{
        return false
    }
   }

   const isFinalStep = () =>{
    if(currentStep === stepsList.length){
        return true
    }else{
        return false
    }
   }

    return (
    <OnboardingView
    getCurrentStep ={getCurrentStep }
    next = {next}
    prev = {prev}
    isFirstStep ={isFirstStep}
    isFinalStep = {isFinalStep}
    stepsList = {stepsList}

    />
    );
    
 }