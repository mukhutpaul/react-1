import clsx from "clsx";

interface Props  { 
    size?: "small" | "medium" | "large";
    variant?: "accent" | "secondary" | "outline" | "ico" | "disabled";
    icon? :  any;
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
            sizeStyles ="text-caption3 font-medium px-[14px] py-[12px]"
            break;

        case "medium":
            sizeStyles ="text-caption2 font-medium px-[18px] py-[15px]"   
            break;

        case "large":
            sizeStyles ="text-caption1 font-medium px-[22px] py-[18px]"        
            break;
    
      
    }
return (
<>
<button
type="button"
className={clsx(variantStyle,icoSize,sizeStyles,"")}
onClick={() => console.log("click")}
disabled = {disabled}
>
    {icon && variant === "ico" ? <></> : <>{children}</>}

</button>


</>

)
}