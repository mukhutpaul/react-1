import { Logo } from "@/ui/design_system/logo/logo"
import { Container } from "postcss"
import { Containers } from "../container/container"
import { Typography } from "@/ui/design_system/typography/typography"
import { Button } from "@/ui/design_system/typography/button/botton"

interface Props{}

export const Navigation = ({}: Props) => {
    return(
        <div className="border border-b-2-gray-400">
            
         <Containers className="py-1.5 flex items-center justify-between gap-7">
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

              <div className="flex items-center gap-7">

                <Typography variant="caption3" component="div" className="flex items-center gap-7">
                    <span>Projets</span>
                    <span>Projets</span>
                    <span>Projets</span>
                </Typography>
                <div className="flex items-center gap-2 flex-2">
                    <Button>Connexion</Button>
                    <Button variant="secondary">Rejoindre</Button>
                    
                </div>
                
                
              </div>
              
              
         </Containers>
        </div>
    )
}