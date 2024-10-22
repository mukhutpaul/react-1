import { Spinner } from "@/ui/design_system/typography/spinner/spinner"
import { ScreenSpinner } from "./screen-spinner"
import { useAuth } from "@/context/authUserContext"
import { useRouter } from "next/router"
import { SessionStatusTypes } from "@/types/session-Status-Type"
import { GUEST, REGISTERED } from "@/lib/session-status"

interface Props {
    children: React.ReactNode,
    sessionStatus?:SessionStatusTypes
}

export const Sessions =({children,sessionStatus}: Props) => {

    const {authUserIsLoading,authUser} = useAuth()
    const router = useRouter()
    const onboardingIsCompleted = authUser?.userDocument?.onboardingIsCompleted

    const shouldRedirectToOneboarding = () =>{
        return(
            !authUserIsLoading &&
            authUser &&
            !onboardingIsCompleted &&
            router.asPath !== "/onboarding"
        )
    }

    const shouldNotRedirectToOneboarding = () =>{
        return(
            !authUserIsLoading &&
            authUser &&
            onboardingIsCompleted &&
            router.asPath === "/onboarding"
        )
    }

    if(shouldRedirectToOneboarding()){
        router.push("/onboarding")
        return <ScreenSpinner/>
    }

    if(shouldNotRedirectToOneboarding()){
        router.push("/mon-espace")
        return <ScreenSpinner/>
    }

    if(sessionStatus === GUEST && !authUserIsLoading){
        if(!authUser){
            return <>{children}</>

        }else {
            router.push("/mon-espace")
        }

    }

    if(sessionStatus === REGISTERED && !authUserIsLoading){
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