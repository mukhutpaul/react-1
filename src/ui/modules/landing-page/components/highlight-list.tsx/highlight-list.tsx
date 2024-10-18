import { Containers } from "@/ui/components/container/container"
import { Button } from "@/ui/design_system/typography/button/botton"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"
import { RiArrowRightLine, RiCheckboxBlankLine, RiCheckboxCircleLine } from "react-icons/ri"

export const HighLightListView =() =>{
    return (
        <Containers className="py-24 space-y-10">
            <div className="flex justify-center gap-24 ">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image
                    fill
                    src="assets/images/fuse.jpeg"
                    alt="Gates"/>
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        De novice à développeur à un clin d'oeil
                    </Typography>
                    <div className="space-y-3">
                        
                        <ListPoint>Progresse rapidement</ListPoint>
                        <ListPoint>Inspire-toi</ListPoint>
                        <ListPoint>Gagne de l'assurance</ListPoint> 
                    </div>
                    <div className="relative inline-block">
                        <Button baseUrl="/#" icon={{icon:RiArrowRightLine}} iconPosition="right">Let's
                        </Button>
                        <Image height={25} width={27} src="/assets/images/fuse1.jpeg" alt="un curseur" className="absolute right-7 -bottom-5 "/>
                    </div>
                </div>
            </div>

            <div className="flex flex-row-reverse justify-start gap-24">
                <div className="w-[520px] h-[350px] relative mt-10">
                    <Image
                    fill
                    src="assets/images/fuse1.jpeg"
                    alt="Gates"/>
                </div>
                <div className="max-w-md space-y-7">
                    <Typography variant="h3" component="h2">
                        De novice à développeur à un clin d'oeil
                    </Typography>
                    <div className="space-y-3">
                        
                        <ListPoint>Progresse rapidement</ListPoint>
                        <ListPoint>Inspire-toi</ListPoint>
                        <ListPoint>Gagne de l'assurance</ListPoint> 
                    </div>
                    <div className="relative inline-block">
                        <Button 
                        variant="secondary"
                        baseUrl="/#" 
                        icon={{icon:RiArrowRightLine}} 
                        iconPosition="right">
                            Demarrer
                        </Button>
                       
                    </div>
                </div>
            </div>
        </Containers>
    )
}

interface Props {
    children: React.ReactNode
}

const ListPoint = ({children}: Props) => {
    return(
        
        <div className="flex items-center gap-2">
        <RiCheckboxCircleLine  size={24} className="mt-1 text-secondary"/>
        <Typography variant="body-lg" component="span">
          {children}
        </Typography>
        </div>
    )
}