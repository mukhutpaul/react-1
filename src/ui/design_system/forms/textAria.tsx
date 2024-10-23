import clsx from "clsx";
import { Typography } from "../typography/typography";

interface Props {
    isLoading:boolean;
    placeholder:string;
    register: any;
    errors: any;
    errorMsg?: string;
    rows?:number;
    id: string
    required?:boolean;
    isAutoCompleted?: boolean;
    label?:string;
}

export const TextAria = ({ 
    isLoading,
    placeholder,
    register,
    rows=5,
    errors,
    errorMsg="Tu dois renseigner ce champ",
    id,
    required = true,
    isAutoCompleted=false,
    label}:Props) =>{

    return(
        <div className="space-y-2">
            {label && (
                <Typography variant="caption4" component="div" theme={errors[id]?"danger":"gray-600"}>
                    {label}
                </Typography>
            )}
            <textarea
            rows={rows}
            placeholder={placeholder}
            className={clsx( 
                isLoading && "bg-gray-300 focus:ring-gray-300 cursor-not-allowed",
                errors[id]?"placeholder-alert-danger text-alert-danger":"placeholder-gray-600",
                "w-full p-4 font-light border border-gray-400 rounded focus:outline-none focus:ring-1 focus:ring-primary"
            )}
            disabled={isLoading}
            {...register(id,
                isLoading ? "bg-primary-300 focus:bg-gray-300 cursor-not-allowed":"bg-white",
                errors[id] ? "placeholder-alert-danger text-alert-danger":"placeholder-gray-600",
                {required:{
                    required,
                    message:errorMsg
                }})}
                autoCapitalize={isAutoCompleted ? "on" : "off"}
            
            
            />


            {errors[id] &&(
           <Typography variant="caption4" component="div" theme="danger">
               {errors[id]?.message}
           </Typography>
        )
         }

         </div>

    )
}