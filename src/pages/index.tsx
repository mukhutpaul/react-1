
import { Seo } from "@/ui/components/seo";
import { Button } from "@/ui/design_system/typography/button/botton";
import { Typography } from "@/ui/design_system/typography/typography";


export default function Home(){
  return (
    <>
    <Seo title="App Nextjs" description="description" />
    <div className="flex items-center gap-4 p-10">
    <Button> Accent</Button>
    <Button size="small" variant="secondary">secondary</Button>
    <Button size="small" variant="outline">Accent</Button>
    <Button size="small" variant="disabled">Accent</Button>
    </div>

    <div className="flex items-center gap-4 p-10">
    <Button> Accent</Button>
    <Button  variant="secondary">secondary</Button>
    <Button  variant="outline">Accent</Button>
    <Button  variant="disabled">Accent</Button>
    </div>

    <div className="flex items-center gap-4 p-10">
    <Button> Accent</Button>
    <Button size="large" variant="secondary">secondary</Button>
    <Button size="large" variant="outline">Accent</Button>
    <Button size="large" variant="disabled">Accent</Button>

    <Button size="small" variant="ico"/>
    </div>
    
    

     {/* <div className="space-y-5">
    <Typography variant="display" component="div" > 
      Coders Monkey
    </Typography>
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
    
    </div> */}
    </>

  )
}