import { FormsType } from "@/types/form"
import { Input } from "@/ui/design_system/forms/input";
import { TextAria } from "@/ui/design_system/forms/textAria";

export interface Props{
    form:FormsType
}
export const ProfileStepForm = ({form}:Props) => {

    const {register,errors,isLoading} = form;

    return(
        <form className="w-full max-w-md space-y-4">
        <Input
        label="Nom Utilisateur"
        isLoading={isLoading}
        placeholder="mukhut"
        type="text" 
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner un pseudo"
        id="displayName"
        
        />
        
        <Input
        label="Spécialité"
        isLoading={isLoading}
        placeholder="Développeur Frond-end freelance"
        type="text" 
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ton expertise"
        id="expertise"
        
        />

      <TextAria
        label="Biographie"
        isLoading={isLoading}
        placeholder="Indiquez une courte descriptions de toi et de ton parcours..."
        rows={5}
        register={register}
        errors={errors}
        errorMsg="Tu dois renseigner ce champs"
        id="biography"
        required={false}
        />

    </form>
        
    )
   
}