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
    theme?: "black"|"gray"|"white"|"primary"|"secondary" | "danger"|"success" |"warning" | "gray-600";
    weight?:"regular"|"medium";
    className?: string
    component?:"h1"|"h2"|"h3"|"h4"|"h5"|"div"|"p"|"span";
    children?:React.ReactNode;
}

export const Typography = ({
    variant = "h3",
    theme = "black",
    weight = "regular",
    className,
    component:Component="div",
    children}:Props) =>{


        let variantStyle: string ="",
        colorStyle: string = "";

        switch (variant){
            case "display":
                variantStyle="text-8xl"
                break
            case "h1":
                variantStyle = "text-7xl"
                break
            case "h2":
                variantStyle="text-6xl"
                break
            case "h3": // default
                variantStyle = "text-5xl"
                break
            case "h4":
                variantStyle = "text-4xl"
                    break
            case "h5":
                variantStyle="text-3xl"
                    break
            case "lead":
                variantStyle = "text-4xl"
                break

            case "body-lg":
                variantStyle = "text-lg"
                break
            case "body-base":
                variantStyle = "text-base" 
                break
            case "body-sm":
                variantStyle = "text-sm" 
                break

            case "caption1":
                variantStyle = "text-caption1" 
                break

            case "caption2":
                variantStyle = "text-caption2" 
                break

            case "caption3":
                variantStyle = "text-caption3" 
                break

            case "caption4":
                variantStyle = "text-caption4"  
                break
        }

        switch (theme) {
            case "black": // default
                colorStyle = "text-gray"
                break;
            case "gray":
                colorStyle = "text-gray-700"
                    
                break;

            case "white":
                colorStyle = "text-white"
                    
                break;
            case "primary":
                colorStyle = "text-primary"
                    
                break;

            case "danger":
                colorStyle = "text-alert-danger"
                        
                break;
            case "success":
                colorStyle = "text-alert-success"
                            
                break;

            case "warning":
                colorStyle = "text-alert-warning"
                                
                break;

            case "secondary":
                colorStyle = "text-secondary"  
                break;

            case "gray-600":
                colorStyle = "text-gray-600"  
                break;
        
        }

    return(<Component className={
        clsx(
            variantStyle,
            weight==="medium" && "font-medium",
            colorStyle,
            className)
        }>
            {children}
        </Component>

     
    )
}