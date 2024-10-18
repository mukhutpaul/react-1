import { Containers } from "@/ui/components/container/container"
import { SocialNetworksBut } from "@/ui/components/navigation/social-networks-buttons"
import { Button } from "@/ui/design_system/typography/button/botton"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine } from "react-icons/ri"
import {v4 as uuidv4} from "uuid"

interface FeaturesListInterface  {
    imagePath:string,
    imageAlt:string,
    title:string,
    description:string,
}
export const FeaturedView = () => {

   
    const featureDate: FeaturesListInterface[] = [
        {
            imagePath:"/assets/images/inpp.jpg",
            imageAlt:"",
            title:"Ressources",
            description:"Consulte et partage des ressources devs"
        },
        {
            imagePath:"/assets/images/inpp.jpg",
            imageAlt:"Illustration",
            title:"Entrainement",
            description:"Entraine-toi à devenir meilleur et trouve de l'inspiration"
        },
        {
            imagePath:"/assets/images/inpp.jpg",
            imageAlt:"Illustration",
            title:"Visibilité",
            description:"Expose tes projets et crée toi des opportunités"
        },
        {
            imagePath:"/assets/images/inpp.jpg",
            imageAlt:"Illustration",
            title:"Rélation",
            description:"Connecte toi avec des devs web et booste ta carrière"
        },
        
    ]
    
    const featuredList = featureDate.map((feature) =>(
        <div key={uuidv4()} className="flex flex-col items-center justify-center bg-white rounded p-7">
           
            <div className="relative w-[138px] h-[138px] rounded-full mb-6 p-10 bg-gray-400 overflow-hidden">
               <Image
                fill
                src={feature.imagePath}
                alt={feature.imagePath}
                className="object-scale-down"
                
               />
               <Image
                fill
                src={feature.imagePath}
                alt={feature.imagePath}
                className="object-scale-down blur-2xl"
              
               /> 
            </div>

            <Typography variant="lead" theme="gray" weight="medium" component="h2" className="mb-2.5">
                {feature.title}
            </Typography>

            <Typography variant="body-base" theme="gray" component="p" className="text-center">
                {feature.description}
            </Typography>
            
        </div>
    ))
    return(
    <div className="bg-gray-300">
        <Containers className="grid grid-cols-12 gap-24 py-24">
            <div className="grid grid-cols-2 col-span-7 gap-7">
                {featuredList}
                
            </div>
            
            <div className="flex flex-col justify-between col-span-5 gap-10">
                <div>
                    <Typography
                    variant="h2"
                    component="h2"
                    className="mb-5"
                    >
                        l'endroit le plus cool pour devenir un développeur
                    </Typography>
                    <Typography
                    variant="body-base"
                    component="p"
                    theme="gray"
                    className="mb-8"
                    >
                        L'endroit le plus cool pour devenir un développeur
                        l'endroit le plus cool pour devenir un développeur
                        l'endroit le plus cool pour devenir un développeur
                        let's
                    </Typography>
                    <Button variant="secondary" baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="right">Commencer</Button>
                </div>
                <div className="">

                <Typography
                    variant="caption3"
                    component="div"
                    className="mb-4"
                    >
                        Nos réseaux sociaux
                    </Typography>
                    <SocialNetworksBut/>
                </div>
                
            </div>
        </Containers> 
         
    </div>
    )
}