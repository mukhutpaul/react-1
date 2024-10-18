import { Containers } from "@/ui/components/container/container"
import { Button } from "@/ui/design_system/typography/button/botton"
import { Typography } from "@/ui/design_system/typography/typography"
import Image from "next/image"

export const HiroTopView = () => {
    return(
    <Containers className="relative pt-40 overflow-hidden pb-52">
        <div className="w-full max-w-2xl space-y-5"> 
          <Typography variant="h1" component="h1" className="max-w-lg">
            Rejoins les signes codeurs!
          </Typography>
          <Typography variant="body-lg" theme="gray" component="p" className="max-w-lg">
            Ici on se prend pas la tête mais on code comme de bêtes!
            rejoins notre tribu de signe codeur, partage ton projet
            les plus fous et fais-toi des amis développeurs.
          </Typography>
          <div className="pt-2.5 space-x-5">
            <Button baseUrl="">Commencer</Button>
            <Button baseUrl="" variant="secondary">En savoir plus</Button>
          </div>
        </div>
        <Image
        src="/assets/images/fuse.jpeg"
        alt="Toujours"
        width={600}
        height={596}
        className="absolute top-0 right-0 z-0"
        />

      
         
    </Containers>

    )
}