import { Containers } from "@/ui/components/container/container"
import { Typography } from "../typography/typography"
import { Button } from "../typography/button/botton"
import { LinkType } from "@/lib/link-type"
import Image from "next/image"

export const CallToActionView = () => {
    return(
        <div className="relative overflow-hidden bg-primary"
        >
            <Containers className="py-20">
                <div className="relative z-10 max-w-3xl space-y-5">
                    <Typography variant="h2" theme="white" component="h2">
                        N'attend pas pour développer tes compétences...
                    </Typography>
                    <div>
                    <Button variant="success" baseUrl="/#" linkType={LinkType.EXTERNAL}>
                       Formation React.Js gratuite
                    
                    </Button>
                    </div>
                </div>
                
                <div> 
                    <Image
                    width={1210}
                    height={1210}
                    src="/assets/svg/YTB.svg"
                    alt="bombe"
                    className="absolute -bottom-[620px] right-[0px]"
                    
                    />
                </div>
                
            </Containers> 

        </div>
    )
}