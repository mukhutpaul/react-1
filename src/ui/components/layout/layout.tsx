import { Typography } from "@/ui/design_system/typography/typography";
import { BreadCrumbs } from "../breadcrumbs/breadcrumbs"
import { Footer } from "../navigation/footer"
import { Navigation } from "../navigation/navigation"
import { Containers } from "../container/container";
import { UserAccountNavigation } from "../navigation/user-account-navigation";


interface Props {
    children:React.ReactNode;
    isDisplayBreadCrumbs?:boolean
    withSideBar?:boolean
}
export const Layout = ({children,isDisplayBreadCrumbs=true,withSideBar}:Props) => {
    let view : React.ReactElement = <></>;

    if(withSideBar){
        view = (
            <Containers className="mb-14">
                <div className="grid grid-cols-12 gap-7">
                   <div className="col-span-3">
                    <UserAccountNavigation/>
                   </div>
                   <div className="col-span-9 ">{children}</div>
                </div>

            </Containers>
        )

    }else {
        view = <>{children}</>
    }

    return(
        <>
        <Navigation/>
        { isDisplayBreadCrumbs && <BreadCrumbs/>}
        {view}
        <Footer/>
        </>
    )
}