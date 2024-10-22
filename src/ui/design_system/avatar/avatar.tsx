import clsx from "clsx";
import Image from "next/image";

interface Props {
    size?:"small"|"medium" |"large";
    src: string;
    alt: string;
} 
export const Avatar = ({size = "medium",src,alt} : Props) => {
    let sizeStyles: string = "";

    switch (size) {

        case "small":
            sizeStyles="w-[24px] h-[24px]"
            break

        case "medium"://default
            sizeStyles="w-[34px] h-[34px]"
            break

        case "large":
            sizeStyles="w-[50px] h-[50px]"
            break
    
        default:
            break;
    }

    return(
        <div className={clsx(sizeStyles,"bg-gray-400 rounded-full relative")}>
           <Image
           fill
           src={src ? src :"/assets/images/cercle.avif"}
           alt={alt}
           
        //    width={50}
        //    height = {50}
           className="object-cover object-center rounded-full "
           
           /> 
           
        </div>
    )
}