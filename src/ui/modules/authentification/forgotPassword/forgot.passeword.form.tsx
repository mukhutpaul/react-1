import { FormsType } from "@/types/form"
import { Input } from "@/ui/design_system/forms/input";
import { Button } from "@/ui/design_system/typography/button/botton";

interface Props{
    form:FormsType
}

export const ForgotPasswordForm = ({form}:Props) =>{
    const {
        onSubmit,
        errors,
        isLoading,
        register,
        handleSubmit,
        } = form;
    return(
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
        <Button isLoading={isLoading} type="submit" fullwidth>
            Envoyer
            </Button>
        
      </form>
    )
}