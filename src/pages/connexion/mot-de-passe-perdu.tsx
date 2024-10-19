import { Layout } from "@/ui/components/layout/layout";
import { Seo } from "@/ui/components/seo/seo";
import { ForgotPasswordContainer } from "@/ui/modules/authentification/forgotPassword/forget.password.container";

export default function ForgotPasseword(){
    return (
      <>
    
      <Seo title="Mot de passe oublié" description="Mot de passe oublié" />
      <Layout>
        <ForgotPasswordContainer/>
      </Layout>
      
    </>
  
    )
  }