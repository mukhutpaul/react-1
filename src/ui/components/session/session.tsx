import { Spinner } from "@/ui/design_system/typography/spinner/spinner"
import { ScreenSpinner } from "./screen-spinner"
import { useAuth } from "@/context/authUserContext"
import { useRouter } from "next/router"

interface Props {
    children: React.ReactNode,
    sessionStatus?:string
}

export const Sessions =({children,sessionStatus}: Props) => {

    const {authUserIsLoading,authUser} = useAuth()
    const router = useRouter()
    if(sessionStatus === "registered" && !authUserIsLoading){
        if(authUser){
            return <>{children}</>

        }else {
            router.push("/connexion")
        }

    }

    if(!authUserIsLoading){
        return <>{children}</>
    }
    return <ScreenSpinner/>
}