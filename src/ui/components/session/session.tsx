import { Spinner } from "@/ui/design_system/typography/spinner/spinner"
import { ScreenSpinner } from "./screen-spinner"
import { useAuth } from "@/context/authUserContext"
import { useRouter } from "next/router"
import { SessionStatusTypes } from "@/types/session-Status-Type"

interface Props {
    children: React.ReactNode,
    sessionStatus?:SessionStatusTypes
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

    if(!sessionStatus && !authUserIsLoading){
        return <>{children}</>
    }
    return <ScreenSpinner/>
}