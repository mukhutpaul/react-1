import { Typography } from "@/ui/design_system/typography/typography"
import { Containers } from "../container/container"
import Image from "next/image"
import {  footerLinks } from "./app-links"
import {v4 as uuidv4} from "uuid"
import { ActiveLink } from "./active-link"
import { AppLink, FooterLinks } from "@/types/app-link"
import { LinkType } from "@/lib/link-type"
import { SocialNetworksBut } from "./social-networks-buttons"


export const Footer=() => {
    const currentYear = new Date().getFullYear()
    console.log(uuidv4())
    
    const footerNavigationList = footerLinks.map((colnLinks) =>(
        <FooterLink key={uuidv4()} data={colnLinks}/> 
    ));
    
    console.log(currentYear)
    return(
        <div className="py-3 bg-gray">
            <Containers className="flex justify-between pt-16">
                <div className="flex flex-col items-center gap-1">
                    <Typography
                    variant="caption1"
                    theme="white"
                    weight="medium"
                    >
                        Formations gratuites
                    </Typography>

                    <Typography variant="caption3" theme="gray">
                     Abonne-toi à la chaine
                    </Typography>

                    <a href="https://youtube.com/@jeanpaulmukhut534" target="_blank">
                    <Image src="/assets/svg/YTB.svg"
                    width={229}
                    height={216}
                    alt="Mukhut Jp | Youtube"/>
                    
                    </a>
                    
                    
                </div>

                <div className="flex gap-7">
                 {footerNavigationList}
                </div>
            </Containers>

            <Containers className="pt-9 pb-11 space-y-11">
                <hr className="text-gray-800" />
                
                <div className="flex items-center justify-between">
                    <Typography variant="caption4" theme="gray">
                        {`Copyright @ ${currentYear} | Propulsed by`} {" "}
                          <a href="https://arnaud-desportes.fr" target="_blank" className="underline">
                          Jean{" "}
                          </a>
                        {`Paul`}
                    </Typography>
                    <div >
                        <SocialNetworksBut theme="gray"/>
                    </div>
                </div>
            </Containers>

        </div>
    )
};

interface footerLinkProps {
    data:FooterLinks;
}

const FooterLink = ({data}:footerLinkProps) => {
    const linkList = data.links.map((link) =>(
        <div key={uuidv4()} >

            {link.type===LinkType.INTERNAL && (
            <ActiveLink key={uuidv4()} href={link.baseUrl}>{link.label}</ActiveLink>
            )}

            {link.type===LinkType.EXTERNAL && (
            <a href={link.baseUrl} target="_blank">{link.label}</a>
            )}
            
        </div>
    
    ));
    return(
        <div className="min-w-[190px]">
            <Typography
            theme="white"
            variant="caption2"
            weight="medium"
            className="pb-5"
            >
                {data.label}
                
            </Typography>

            <Typography theme="gray" variant="caption3" className="space-y-5">
                {linkList}
            </Typography>
            
        </div>
    )

}