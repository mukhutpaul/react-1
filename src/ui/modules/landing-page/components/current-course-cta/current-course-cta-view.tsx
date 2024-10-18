import { Containers } from "@/ui/components/container/container"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"
import { RiPlayCircleLine } from "react-icons/ri"

export const CurrentCourseCtaView =() =>{
    return(
        <div className="bg-gray-300">
            <Containers className="py-24 text-center">

                <Typography variant="h2" component="h2" className="mb-2.5">
                    Formation React.js gratuite
                </Typography>

                <Typography variant="lead" component="h3" className="mb-5">
                    Apprend à code l'app des signes coderurs
                </Typography>

                <Typography variant="caption3" component="p" theme="gray"className="mb-16">
                    Si tu veux un meilleur Cv suis cette formation complète
                </Typography>
                <a href="/#" target="_blank">
                   <div className="relative bg-gray-400 rounded h-[626px]" >
                  
                    <div className="relative z-10 flex flex-col items-center justify-center h-full gap-2 text-white opacity-0 bg-gray hover:opacity-95 animate">
                        <RiPlayCircleLine size={42}/>
                        <Typography 
                        variant="caption2" 
                        theme="white"
                        className="uppercase"
                        weight="medium"
                        >
                            Lire la formation
                        </Typography>
                    </div>

                    <Image 
                    fill
                    src="/assets/images/fuse.jpeg"
                    alt="formation"
                    className="object-cover object-center rounded"
                    />
                    
                    
                   </div>
                </a>
                
            </Containers>

        </div>
    )
}