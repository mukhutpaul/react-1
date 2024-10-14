import Image from "next/image";

interface Props {
    size?:"small" | "medium" | "large"
} 
export const Avatar = ({size = "medium"} : Props) => {
    let sizeStyles: string;

    switch (size) {

        case "small":
            sizeStyles=""
            break

        case "medium"://default
            sizeStyles = ""
            break

        case "large":
            sizeStyles = ""
            break
    
        default:
            break;
    }

    return(
        <>
           <Image
           src = "/assets/images/inpp.jpg"
           alt="Avatar Inpp"
           width={50}
           height = {50}
           
           />
        </>
    )
}