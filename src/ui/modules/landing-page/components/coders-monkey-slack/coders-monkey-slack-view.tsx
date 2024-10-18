import { LinkType } from "@/lib/link-type"
import { Containers } from "@/ui/components/container/container"
import { Logo } from "@/ui/design_system/logo/logo"
import { Button } from "@/ui/design_system/typography/button/botton"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"

export const CodersMonkeySlack =() =>{
    return(
        <Containers className="flex justify-between">
            <div className="flex flex-col justify-center max-w-2xl space-y-5">
                <div className="flex items-center gap-2">
                <Logo size="small"/>
                <Typography variant="caption1" component="span" weight="medium">
                    Coders Monkey
                </Typography>
                </div>
                <Typography variant="h2" component="h2">
                    Rejoins-nous sur le slack signe codeurs
                </Typography>
                <Typography variant="body-lg" component="p" theme="gray" className="max-w-lg">
                    Rejoins-nous sur le slack signe codeurs
                </Typography>
                <Button baseUrl="/#" linkType={LinkType.EXTERNAL}>
                Rejoindre le groupe d'aide
                </Button>
            </div>
            <div className="relative w-[600px] h-[600px]">
                <Image fill src={"/assets/images/fuse1.jpeg"} alt="coders monkeys slack"/>
            </div>
        </Containers>
    )
} 