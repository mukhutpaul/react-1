import { BreadCrumbs } from "../breadcrumbs/breadcrumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"

interface Props {
    children:React.ReactNode
}
export const Layout = ({children}:Props) => {
    return(
        <>
        <Navigation/>
        <BreadCrumbs/>
        {children}
        <Footer/>
        </>
    )
}