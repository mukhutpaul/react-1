import { IconProp } from "@/types/iconProps";
import clsx from "clsx";
import React from "react";
import { Spinner } from "../spinner/spinner";
import { LinkType } from "@/lib/link-type";
import Link from "next/link";

interface Props  { 
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "ico" | "disabled" | "success"| "danger";
    icon? :IconProp;
    iconTheme?: "accent" | "secondary" | "gray" ;
    iconPosition?: "left" | "right";
    disabled?: boolean;
    isLoading?: boolean;
    children? : React.ReactNode;
    baseUrl?:string,
    linkType?:LinkType
    action?:Function;
    type?:"button" | "submit";
    fullwidth?:boolean
    
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
    baseUrl,
    linkType="internal",
    action = () =>{},
    type="button",
    fullwidth = false

}: Props) => {
    console.log(icon)
    let variantStyle: string ="",
    sizeStyles : string = "",
    icoSize : number = 0;

    switch (variant) {
        case "accent": 
            variantStyle ="bg-primary hover:bg-primary-400 text-white rounded"
            
            break;
        case "danger": 
            variantStyle ="bg-alert-danger hover:alert-danger/75 text-white rounded"
            
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

        case "success": 
            variantStyle ="bg-secondary hover:bg-secondary-400 text-white rounded"
            break;

        case "ico": 
            if (iconTheme == "accent"){
                variantStyle ="bg-primary hover:bg-primary-400 text-white rounded-full"
            }
            if (iconTheme == "secondary"){
                variantStyle ="bg-primary-200 hover:bg-primary-300/50 text-primary rounded-full"
            }

            if (iconTheme == "gray"){
                variantStyle ="bg-gray-800 hover:bg-gray-700 text-white rounded-full"
            }

           
            
            break;
    }

    switch (size) {

        case "small":
            sizeStyles =`text-caption3 font-medium ${variant==="ico"?"px-[15px] py-[15px]":"px-[14px] py-[12px]"}`;
            icoSize=18;
            break;

        case "medium":
            sizeStyles =`text-caption2 font-medium ${variant==="ico"?"px-[20px] py-[20px]":"px-[18px] py-[15px]"}`;
            icoSize =20;   
            break;

        case "large":
            sizeStyles =`text-caption1 font-medium ${variant==="ico"?"px-[30px] py-[30px]":"px-px-[22px] py-[18px]"} `; 
            icoSize = 24;       
            break;
    
      
    }

const handleClick =() =>{
    if(action){
        action()
    }
}
const buttonContent =(
    <>
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
    </>
);

const buttonElement=(
    <button
type={type}
className={clsx(
    variantStyle,
    icoSize,
    sizeStyles,
    "relative",
    "animate",
    isLoading && "cursor-not-allowed",
    fullwidth && "w-full"
)}
onClick={handleClick}
disabled = {disabled || isLoading ? true: false}
> 
{buttonContent}
</button>
    
)

if(baseUrl){
   if(linkType === LinkType.EXTERNAL){
    return(
        <a href={baseUrl} target="_blank">
            {buttonElement}
        </a>
    )
   }else {
    return(
        <Link href={baseUrl}>{buttonElement}</Link>
    )
   }
    
}

return buttonElement
}