import clsx from "clsx";
import { Component } from "react";

interface Props {
    variant?:
    "display" 
    |"h1"
    |
    "h2"
    |"h3"
    |"h4"
    |"h5"
    |"lead"
    |"body-lg"
    |"body-base"
    |"body-sm"
    |"caption1"
    |"caption2"
    |"caption3"
    |"caption4"
    |"caption5";
    theme?: "black"|"gray"|"white"|"primary"|"secondary";
    weight?:"regular"|"medium";
    className: string
    component?:"h1"|"h2"|"h3"|"h4"|"h5"|"div"|"p"|"span";
    children:React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    theme ="black",
    weight="regular",
    className,
    component:Component="div",
    children}:Props) =>{


        let variantStyle: string =""
        switch (variant){
            case "display":
                variantStyle="text-red-500"
                break
            case "h1":
                variantStyle = "text-green-500"
                break
        }

    return(<Component className={clsx(variantStyle,weight==="medium" && "font-medium", className)}>{children}</Component>

     
    )
}