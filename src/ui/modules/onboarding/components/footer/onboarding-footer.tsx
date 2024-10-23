import { Button } from "@/ui/design_system/typography/button/botton";
import clsx from "clsx";

interface Props {
    next?: () => void;
    prev?: () => void;
    isFirstStep?:() => boolean;
    isFinalStep?:() => boolean;
    isLoading?:boolean
}

export const OnBoardingFooter = (
    {
        next,
        prev,
        isFirstStep,
        isFinalStep,
        isLoading
    }:Props
) => {
    let actionButtonTitle:string

    if(isFirstStep && isFirstStep()){
        actionButtonTitle="Demarrer"

    }else if(isFinalStep && isFinalStep()){
        actionButtonTitle="Terminer"

    }else{
        actionButtonTitle="Continuer"

    }
    return(
        <div className="absolute bottom-0 left-0 w-full p-5 bg-white border border-gray-400">
              <div className={clsx("flex items-center",prev && !next && "justify-start",
              !prev && next && "justify-end", next && prev && "justify-between")}>
                {prev && (
                    <Button 
                    disabled={isLoading}
                    variant={!isLoading?"outline":"disabled"}
                    action={prev}
                    >
                        Retour
                    </Button>
                    
                )}
                {next && (
                    <Button 
                    disabled={isLoading}
                    action={next}
                    >
                        {actionButtonTitle}
                    </Button>
                )}
              </div>
        </div>

    )
}