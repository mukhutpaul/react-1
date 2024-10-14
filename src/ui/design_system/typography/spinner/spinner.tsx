import clsx from "clsx";

interface Props {
    size?: "small" | "medium" | "large";
    variant?: "primary" | "white"
}

export const Spinner = ({size="medium",variant="primary"}:Props) => {
    let variantStyle: string ="", sizeStyle: string =""

    console.log(variant)
    switch (size) {
        case "small":
            sizeStyle ="w-5 h-5"
            break;

        case "medium": // default
            sizeStyle = "w-9 h-9"
            
            break;

        case "large":
            sizeStyle = "w-12 h-12"
                
            break;
    
      
    }

    switch (variant) {
        case "primary":// primary
            variantStyle ="text-primary"
            console.log(variant)
            break;

        case "white": // default
            variantStyle = "text-white"
            
            break;

    
      
    }
   

  return (

    

    <svg 
    role="spinner"
    className={clsx(sizeStyle,variantStyle,"animate-spin")}
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    >
    <circle 
    className="opacity-25"
    cx="12"
    cy="12"
    r="10"
    stroke="currentColor"
    strokeWidth="4"
    >
    </circle>

    
    
    <path className="opacity-75" d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/> 
    </svg>

    
  )
}