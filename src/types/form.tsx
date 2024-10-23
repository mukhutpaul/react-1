export interface FormsType {
    control?:any;
    onSubmit:any;
    errors: any;
    isLoading:any;
    register:any;
    handleSubmit:any;
}
export interface RegisterFormFieldsType{
    email: string;
    password:string;
    how_did_hear: string;
}

export interface LoginFormFieldsType{
    email: string;
    password:string;
}

export interface ForgetFormFieldsType{
    email: string;
}

export interface OnBoardingProfileFormFieldsType{
    displayName: string;
    expertise: string;
    biography:string;
}