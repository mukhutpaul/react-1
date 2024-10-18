
import { Containers } from "@/ui/components/container/container";
import { Footer } from "@/ui/components/navigation/footer";
import { Navigation } from "@/ui/components/navigation/navigation";
import { Seo } from "@/ui/components/seo/seo";
import { Avatar } from "@/ui/design_system/avatar/avatar";
import { Logo } from "@/ui/design_system/logo/logo";
import { Button } from "@/ui/design_system/typography/button/botton";
import { Spinner } from "@/ui/design_system/typography/spinner/spinner";
import { Typography } from "@/ui/design_system/typography/typography";
import { Container } from "postcss";
import { RiUser6Fill } from "react-icons/ri";



export default function Home(){
  return (
    <>
  
    <Seo title="App Nextjs" description="description" />
    <Navigation/>
    <Footer/>
    
  </>

  )
}