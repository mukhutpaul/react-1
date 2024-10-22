import { useAuth } from "@/context/authUserContext"
import { Avatar } from "@/ui/design_system/avatar/avatar"
import { Typography } from "@/ui/design_system/typography/typography"
import Link from "next/link"

export const AccountAvatarNavigationLink = () =>{
    const {authUser} = useAuth()
    const { photoURL, displayName} = authUser
    return(
        <Link href="/mon-espace" className="flex items-center gap-2">
            <Avatar src={photoURL} alt={displayName?`Avatar d'${displayName}`:"Avatar de l'utilisateur"} size="large"/>

            <div className="max-w-[160px]">
                <Typography variant="caption3" weight="medium" className="truncate">
                    {displayName? displayName:"Bienvenue"}
                </Typography>
                <Typography variant="caption4" weight="medium" theme="gray">
                    Mon compte  
                </Typography>
            </div>
        </Link>
    )
}