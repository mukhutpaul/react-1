import { Button } from "@/ui/design_system/typography/button/botton"
import { foorterInformationNetworkLinks } from "./app-links"
import {v4 as uuidv4} from "uuid"
import { RiFacebookBoxFill } from "react-icons/ri"
import clsx from "clsx"


interface Props { 
    theme?: "gray" | "accent" | "secondary"
    className?:string
}
export const SocialNetworksBut = ({className,theme="accent"}:Props) => {


    const icoList = foorterInformationNetworkLinks.map((social) =>(
        <Button
         key={uuidv4()}
         variant="ico"
         iconTheme={theme}
         icon={{
            icon: social.icon ? social.icon : RiFacebookBoxFill
         }}
         baseUrl={social.baseUrl}
         linkType={social.type}
        />
    ))
 
    return(
        <div className={clsx(className,"flex items-center gap-2.5")}>{icoList}</div>
    )

}