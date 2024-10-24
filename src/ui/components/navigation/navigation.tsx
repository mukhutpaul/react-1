import { Logo } from "@/ui/design_system/logo/logo"
import { Container } from "postcss"
import { Containers } from "../container/container"
import { Typography } from "@/ui/design_system/typography/typography"
import { Button } from "@/ui/design_system/typography/button/botton"
import Link from "next/link"
import { ActiveLink } from "./active-link"
import { useAuth } from "@/context/authUserContext"
import { AccountAvatarNavigationLink } from "./account-avatar-link"

interface Props{}

export const Navigation = ({}: Props) => {
    const { authUser } = useAuth();
    console.log("authUser",authUser)

    const authentificationSystem = (
        <div className="flex items-center gap-2">
        <Button baseUrl="/connexion">
        Connexion
        </Button>
        <Button baseUrl="/connexion/inscription" variant="secondary">
        Rejoindre
        </Button>
        
        </div>
    
    )

    
    return(
        <div className="border border-gray-400">
            
         <Containers className="py-1.5 flex items-center justify-between gap-7">
               <Link href="/">
              <div className="flex items-center gap-2.5">
                <Logo size="small"/>
               <div className="flex flex-col">
                 <div className="font-extrabold text-gray text-[24px]">
                    Coders Monkeys
                </div>

                <Typography
                variant="caption3"
                component="span"
                theme="gray"
                >
                    Trouve de l'inspiration & reçois des feedback !
                </Typography>
               </div>
              </div>
              </Link>
              <div className="flex items-center gap-7">

                <Typography variant="caption3" component="div" className="flex items-center gap-7">
                    <ActiveLink href="/design_system">Design System</ActiveLink>
                    <ActiveLink href="/projets">Projets</ActiveLink>
                    <ActiveLink href="/formation">Formation</ActiveLink>
                    <ActiveLink href="/contact">Contact</ActiveLink>
                </Typography>
          
                {!authUser ? authentificationSystem:<AccountAvatarNavigationLink/>}
                
                
              </div>
              
              
         </Containers>
        </div>
    )
}