import { GUEST } from "@/lib/session-status";
import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { LoginContainer } from "@/ui/modules/authentification/login/login.container";

export default function Connexion(){
    return (
      <>
    
      <Seo title="Connexion sur coders monkey" description="Page connexion" />
      <Layout sessionStatus={GUEST}>
        <LoginContainer/>
      </Layout>
      
    </>
  
    )
  }