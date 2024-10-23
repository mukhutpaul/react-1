import { BaseComponentProps } from "@/types/onboarding-steps-list"
import { Button } from "@/ui/design_system/typography/button/botton"
import { OnBoardingFooter } from "../../footer/onboarding-footer"
import { Containers } from "@/ui/components/container/container"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"
import { OnboardingTabs } from "../../tabs/onboardingTabs"

export const WelcomeStep = ({
    next,
    isFirstStep,
    isFinalStep,
    getCurrentStep,
    stepsList
}:BaseComponentProps) =>{
    

    return(
        <div className="relative h-screen pb-[91px]">

            <div className="h-full overflow-auto">
                <Containers className="grid h-full grid-cols-12">
                    <div className="relative z-10 flex items-center h-full col-span-6 py-10">
                        <div className="w-full space-y-5 pb-4.5">
                            <OnboardingTabs tabs={stepsList} getCurrentStep={getCurrentStep}/>
                            <Typography variant="h1" component="h1">
                                Bienvenue sur 
                                l'appli des signes 
                                codeurs !
                            </Typography>
                            <Typography variant="body-base" component="p" theme="gray">
                                Vous trainez avec des developpeurs aussi fous 
                                que toi, montres tes projets persos et reçois des 
                                feedbacks constructifs (ou fais toi carrément
                                descendre). Prêts à créer des trucs incroyables?
                            </Typography>
                        </div>
                    </div>

                    <div className="flex items-center h-full col-span-6">
                        <div className="flex justify-end w-full">
                            <Image
                            src="/assets/images/fuse.jpeg"
                            alt="Illustration"
                            width={400}
                            height={591} 
                            />  
                        </div>  
                    </div>   
                </Containers>
            
            </div> 

         <OnBoardingFooter 
         next={next} 
         isFirstStep={isFirstStep}
         isFinalStep={isFinalStep}
         />
        </div>
)

}