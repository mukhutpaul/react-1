
import { Seo } from "@/ui/components/seo";
import { Typography } from "@/ui/design_system/typography/typography";


export default function Home(){
  return (
    <><Seo title="App Nextjs" description="description" />
    <Typography variant="h1"component="h1" className="">
      Coders Monkey
    </Typography>
    
    </>

  )
}