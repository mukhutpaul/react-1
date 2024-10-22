import { Spinner } from "@/ui/design_system/typography/spinner/spinner"

export const ScreenSpinner = () =>{
    return (
        <div className="flex items-center justify-center h-screen">
            <Spinner size="large"></Spinner>
        </div>
    )
}