import { AppLink } from "@/types/app-link";
import { RiLinkedinFill, RiStackFill, RiStackshareFill, RiStackshareLine, RiYoutubeFill } from "react-icons/ri";

 const foorterApplicationLinks:AppLink[] = [
    {
        label:"Accuel",
        baseUrl:"/",
        type:"internal",
    },

    {
        label:"Projets",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Coders Monkeys",
        baseUrl:"/#",
        type:"internal",
    },

    {
        label:"Formations",
        baseUrl:"/https://youtube.com/@jeanpaulmukhut534",
        type:"external",
    },
];

 const foorterUserLinks:AppLink[] = [
    {
        label:"Mon espace",
        baseUrl:"/#",
        type:"internal",
    },

    {
        label:"Connexion",
        baseUrl:"/#",
        type:"internal",
    },
    {
        label:"Inscription",
        baseUrl:"/#",
        type:"internal",
    },

    {
        label:"Mot de passe oublié",
        baseUrl:"/https://youtube.com/@jeanpaulmukhut534",
        type:"internal",
    },
]

const foorterFormationLinks:AppLink[] = [
    {
        label:"CGI",
        baseUrl:"/#",
        type:"external",
    },

    {
        label:"Confidentialité",
        baseUrl:"/#",
        type:"external",
    },
    {
        label:"A propos",
        baseUrl:"/#",
        type:"internal",
    },

    {
        label:"Contact",
        baseUrl:"/#",
        type:"internal",
    },
]


export const foorterInformationNetworkLinks:AppLink[] = [
    {
        label:"Youtube",
        baseUrl:"https://youtube.com/@jeanpaulmukhut534",
        type:"external",
        icon: RiYoutubeFill
    },

    {
        label:"Linkdin",
        baseUrl:"/#",
        type:"external",
        icon:RiLinkedinFill,
    },
    {
        label:"Stack",
        baseUrl:"/#",
        type:"internal",
        icon:RiStackshareLine,
    },

   
]

export const footerLinks =[
    {
        label:"App",
        links: foorterApplicationLinks
    },

    {
        label:"Utilisateur",
        links: foorterUserLinks
    },
    {
        label:"Information",
        links: foorterFormationLinks
    },

    {
        label:"Réseaux",
        links: foorterInformationNetworkLinks
    },
    
]

