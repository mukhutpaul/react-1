import userFirebaseAuth from "@/hooks/use-firebase-auth"
import { UserDocument } from "@/types/user"
import { createContext,useContext } from "react"

const init = {
    uid :"",
    email :"",
    displayName :"",
    emailVerified : false,
    phoneNumber : "",
    photoURL : "",
    userDocument : {} as UserDocument,
} 

const AuthUserContext = createContext({
    authUser: init,
    authUserIsLoading:true
})

interface Props {
    children: React.ReactNode
}

export function AuthUserProvider({children}:Props){

    const auth = userFirebaseAuth()
    return(
        <AuthUserContext.Provider 
        value = {
            {
                    authUser:auth.authUser as {
                    uid:string;
                    email: string;
                    displayName:string;
                    emailVerified:boolean;
                    phoneNumber: string;
                    photoURL: string;
                    userDocument: UserDocument;

                },
                authUserIsLoading:auth.authUserIsLoading

            }
        }
        >
            {children}
        </AuthUserContext.Provider>
    )


}

export const useAuth = () => useContext(AuthUserContext)