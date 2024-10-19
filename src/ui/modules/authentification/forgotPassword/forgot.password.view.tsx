import { Typography } from "@/ui/design_system/typography/typography"
import { RegisterForm } from "../register/register.form"
import Link from "next/link"
import { Box } from "@/ui/design_system/box/box"
import { Containers } from "@/ui/components/container/container"
import Image from "next/image"
import { ForgotPasswordForm } from "./forgot.passeword.form"
import { FormsType } from "@/types/form"

interface Props {
    form:FormsType
}
export const ForgotPasswordView= ({form}:Props)=>{
    return(
        <Containers className="grid grid-cols-2 gap-20 mb-32">
          
        <div className="flex items-center">
            <div className="relative w-full h-[531px]">
                <Image src="/assets/images/login8.jpeg" alt="Description de l'illustration" fill
                 className="object-scale-down"/>

            </div>
        </div>
        <div className="flex items-center">
            <Box padding_y="py-5">
                <div className="flex items-center justify-between">
                    
                    
                    <Typography variant="h5" component="h1" >
                        Mot de passe perdu ?
                    </Typography>
               
                    
                    <Typography variant="caption4" component="span" theme="primary">
                        <Link href="/connexion">Connexion</Link> 
                    </Typography>        
                       
        </div>
        <ForgotPasswordForm
        form ={form}
        />
       
               
              </Box>
           </div>
       </Containers>
    )
}