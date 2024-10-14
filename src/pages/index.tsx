
import { Seo } from "@/ui/components/seo";
import { Logo } from "@/ui/design_system/logo/logo";
import { Button } from "@/ui/design_system/typography/button/botton";
import { Spinner } from "@/ui/design_system/typography/spinner/spinner";
import { Typography } from "@/ui/design_system/typography/typography";
import { RiUser6Fill } from "react-icons/ri";



export default function Home(){
  return (
    <>
  
    <Seo title="App Nextjs" description="description" />
    <div className="max-w-6xl p-10 mx-auto space-y-5">
      
    <div className="space-y-2">
    <Typography variant="caption2" weight="medium" > 
      Coders Monkey
    </Typography>
    <div className="flex flex-col gap-2 p-5 border-gray-400 divide-x-2 divide-gray-400 rounded">
      <div className="pb-5 space-y-2">
        <Typography variant="caption3" weight="medium">
          Display
        </Typography>
        <Typography variant="display">
          Nothing is impossible
          
        </Typography>
      </div>

    
      <div className="pb-5 space-y-2">
        <Typography variant="caption3" weight="medium">
          H1
        </Typography>
        <Typography variant="h1">
          Nothing is impossible, the word itself says, i'm possible
          
        </Typography>
      </div>

      <div className="pb-5 space-y-2">
        <Typography variant="caption3" weight="medium">
          H2
        </Typography>
        <Typography variant="h1">
          your time is limited, so don't waste it living someone else's life
          
        </Typography>
      </div>
      
    </div>
    <Typography theme="secondary" variant="body-lg" component="h1">
      Coders Monkey
    </Typography>
    <Typography variant="lead" component="div">
      Coders Monkey
    </Typography>
    <Typography variant="body-sm" component="div" >
      Coders Monkey
    </Typography>
    <Typography variant="caption4" component="div">
      Coders Monkey
    </Typography>

    <Typography variant="caption4" component="div">
      Coders Monkey
    </Typography> 
    
    </div>


    
    <div className="flex items-center gap-4 p-10">
    <Spinner size="small"/>
    <Spinner size="large"/>
    <Spinner />
    </div>

    <div className="flex items-center gap-4 p-10">
     <Logo size="very-small"/>
     <Logo size="small"/>
     <Logo size="large"/>
     <Logo/>
    </div>

    
    <div className="flex items-center gap-4 p-10">
    <Button isLoading size="small" icon={{icon : RiUser6Fill }} iconPosition="left">
       Accent
      </Button>
      <Button isLoading size="small" icon={{icon : RiUser6Fill }}>
       Accent
      </Button>
    <Button isLoading size="small" variant="secondary">secondary</Button>
    <Button isLoading size="small" variant="outline">Accent</Button>
    <Button isLoading size="small" variant="disabled">Accent</Button>
    <Button isLoading 
    size="small" 
    variant="ico" 
    icon={{icon : RiUser6Fill }}/>
    </div>

    <div className="flex items-center gap-4 p-10">
    <Button> Accent</Button>
    <Button  variant="secondary">secondary</Button>
    <Button  variant="outline">Accent</Button>
    <Button  variant="disabled">Accent</Button>
    <Button 
    variant="ico" 
    icon={{icon : RiUser6Fill }}/>
    </div>

    <div className="flex items-center gap-4 p-10">
    <Button> Accent</Button>
    <Button size="small" variant="secondary">secondary</Button>
    <Button size="small" variant="outline">Accent</Button>
    <Button size="small" variant="disabled">Accent</Button>

    <Button 
    size="large" 
    variant="ico" 
    icon={{icon : RiUser6Fill }}/>

  <Button 
    size="large" 
    variant="ico" 
    iconTheme="secondary"
    icon={{icon : RiUser6Fill }}/>

  <Button 
    size="large" 
    variant="ico" 
    iconTheme="gray"
    icon={{icon : RiUser6Fill }}/>
    </div>
    
    </div>  

    
  </>

  )
}