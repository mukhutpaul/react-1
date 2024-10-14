import { IconProp } from "@/types/iconProps";
import clsx from "clsx";
import React from "react";
import { Spinner } from "../spinner/spinner";

interface Props  { 
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "ico" | "disabled";
    icon? :IconProp;
    iconTheme?: "accent" | "secondary" | "gray";
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;

    children? : React.ReactNode;
}
export const Button = ({
    size = "medium",
    variant = "accent",
    icon,
    iconTheme = "accent",
    iconPosition = "right",
    disabled,
    isLoading,
    children,

}: Props) => {
    console.log(icon)
    let variantStyle: string ="",
    sizeStyles : string = "",
    icoSize : number = 0;

    switch (variant) {
        case "accent": 
            variantStyle ="bg-primary hover:bg-primary-400 text-white rounded"
            
            break;
        case "secondary": 
            variantStyle ="bg-primary-200 hover:bg-primary-300/50 text-primary rounded"
            break;
        case "outline": 
            variantStyle ="bg-white hover: bg-gray-400/50 border border-gray-500 text-gray-900 rounded"
            break;
        case "disabled": 
            variantStyle ="bg-gray-400 border-gray-500 text-gray-600 rounded cursor-not-allowed" 
            break;

        case "ico": 
            if (iconTheme == "accent"){
                variantStyle ="bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            if (iconTheme == "secondary"){
                variantStyle ="bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            }

            if (iconTheme == "gray"){
                variantStyle ="bg-gray-700 hover:bg-gray-600 text-white rounded-full"
            }

           
            
            break;
    }

    switch (size) {

        case "small":
            sizeStyles ="text-caption3 font-medium px-[14px] py-[12px]";
            icoSize=18;
            break;

        case "medium":
            sizeStyles ='text-caption2 font-medium ${} px-[18px] py-[15px]';
            icoSize =20;   
            break;

        case "large":
            sizeStyles ='text-caption1 font-medium ${} px-[22px] py-[18px]'; 
            icoSize = 24;       
            break;
    
      
    }
return (
<>
<button
type="button"
className={clsx(
    variantStyle,
    icoSize,
    sizeStyles,
    "relative",
    isLoading && "cursor-wait")}
onClick={() => console.log("click")}
disabled = {disabled}
>

    {isLoading && (
        <div className="absolute inset-0 flex items-center justify-center">
            {variant === "accent" || variant==="ico"? <Spinner size="small" variant="white"/>
            :(<Spinner size="small"/>
        )}
          
        </div>
    )}

    <div className={clsx(isLoading && "invisible")}>
    {
    icon && variant === "ico" ? (
    <icon.icon size={icoSize}/>
    ) : 
    <div className={clsx(icon && "flex items-center gap-1")}>
    {icon && iconPosition === "left" && (
        <icon.icon size={icoSize}/>
    )}
    {children}

    {icon && iconPosition === "right" && (
        <icon.icon size={icoSize}/>
    )}
    </div>
    } 
   </div>
</button>


</>

)
}