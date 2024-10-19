import { FormsType } from "@/types/form"
import { Input } from "@/ui/design_system/forms/input";
import { Button } from "@/ui/design_system/typography/button/botton";


 interface Props{
    form: FormsType
}
export const RegisterForm = ({form}:Props) =>{
    const {
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,
        } = form;
        console.log('form',form)
    return(
        <>
      <form onSubmit={handleSubmit(onSubmit)} className="pt-8 pb-5 space-y-4">
        <Input
          isLoading={isLoading}
          placeholder ="jp@gmail.com"
          type="email"
          register={register}
          errors = {errors}
          errorMsg="Tu dois renseigner ce champ"
          id ="email"
        />

        <Input
          isLoading={isLoading}
          placeholder ="Mot de passe"
          type="password"
          register={register}
          errors = {errors}
          errorMsg="Tu dois renseigner ce champ"
          id ="password"
        />

        <Input
          isLoading={isLoading}
          placeholder ="Comment tu nous as connu ?"
          register={register}
          errors = {errors}
          errorMsg="Tu dois renseigner ce champ"
          id ="how_did_hear"
        />

   

        <Button isLoading={isLoading} type="submit" fullwidth>S'inscrire</Button>
        
      </form>
     
       </>
    )
}