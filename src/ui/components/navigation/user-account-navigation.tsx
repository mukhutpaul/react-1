import { firebaseLogOutUser } from "@/api/authentification"
import { Box } from "@/ui/design_system/box/box"
import { Button } from "@/ui/design_system/typography/button/botton"
import { Typography } from "@/ui/design_system/typography/typography"
import { toast } from "react-toastify"
import { ActiveLink } from "./active-link"

export const UserAccountNavigation = () =>{
    const handleLogOutUser = async() =>{
        const {error} = await firebaseLogOutUser() 

        if(error){
            toast.error(error.message)
            return
        }
        toast.success("A bientot sur codeurs Monkeys")
    }
    return(
        <Box className="flex flex-col gap-7">
            <div className="flex flex-col gap-3">
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-espace">Mon compte</ActiveLink>
                </Typography>
                <Typography variant="caption2" weight="medium">
                    <ActiveLink href="/mon-compte/mes-projets">Mes projets</ActiveLink>
                </Typography>
            </div>

            <Button action={handleLogOutUser} variant="danger">
                Déconnexion
            </Button>

        </Box>
    )
}