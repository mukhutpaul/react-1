
import { REGISTERED } from "@/lib/session-status";
import { Containers } from "@/ui/components/container/container";
import { Layout } from "@/ui/components/layout/layout";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Sessions } from "@/ui/components/session/session";
import { Avatar } from "@/ui/design_system/avatar/avatar";
import { Logo } from "@/ui/design_system/logo/logo";
import { Button } from "@/ui/design_system/typography/button/botton";
import { Spinner } from "@/ui/design_system/typography/spinner/spinner";
import { Typography } from "@/ui/design_system/typography/typography";
import { OnboardingContainer } from "@/ui/modules/onboarding/components/onboarding.container";


import { RiUser6Fill } from "react-icons/ri";



export default function OnBoarding(){
  return (
    <>
  
    <Seo title="OnBoarding" description="Description de la page onboarding" />

  
      <Sessions sessionStatus={REGISTERED}>
        <OnboardingContainer/>
        
      </Sessions>
      
    
  </>
 
  )
}