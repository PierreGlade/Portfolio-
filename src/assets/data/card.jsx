import iconeHTML from '../images/icone_html.svg'
import iconeCSS from '../images/icone_css.svg';
import iconeFigma from '../images/icone_figma.svg';
import iconeGithub from '../images/icone_github.svg';
import iconeJavaScript from '../images/icone_javascript.svg';
import iconeReact from '../images/icone_react.svg';
import iconeRedux from '../images/icone_redux.svg';
import iconeSass from '../images/icone_sass.svg';
import iconeWordpress from '../images/icone_wordpress.svg';
import iconePostman from '../images/icone_postman.png';
import iconeSwagger from '../images/icone_swagger.svg';
import Booki from '../images/booki.jpg';
import Event724 from '../images/724events.png';
import Ninacarducci from "../images/ninacarducci.webp";


const icone = [
    {
        "name": "HTML5",
        "image": iconeHTML
    },
    {
        "name": "CSS",
        "image": iconeCSS
    },
    {
        "name": "SASS",
        "image": iconeSass
    },
    {
        "name": "FIGMA",
        "image": iconeFigma
    },
    {
        "name": "JAVASCRIPT",
        "image": iconeJavaScript
    },
    {
        "name": "REACT",
        "image": iconeReact
    },
    {
        "name": "REDUX",
        "image": iconeRedux
    },
    {
        "name": "GITHUB",
        "image": iconeGithub
    },
    {
        "name": "WORDPRESS",
        "image": iconeWordpress
    },
        {
        "name": "POSTMAN",
        "image": iconePostman
    },
    {
        "name": "SWAGGER",
        "image": iconeSwagger
    },

    
  ]

export const portfolio =  [

    {
        "name" : "724events",
        "image" : Event724,
        "text" : "Debugging du site d'une agence d'événementiel",
        "code" : "https://github.com/PierreGlade/Projet10",
        "competences" : ["React Dev Tools", "Debugging", ]
    },
    {
        "name" : "Booki",
        "image" : Booki,
        "text" : "Intégration de l'interface d'un site avec le support de maquettes",
        "code" : "https://github.com/PierreGlade/Projet3",
        "competences" : ["HTML",  "CSS", "Figma"]
    },
    {
        "name" : "Nina Carducci",
        "image" : Ninacarducci,
        "text" : "Optimisation du SEO d'un site de photographie",
        "code" : "https://github.com/PierreGlade/Projet9",
        "competences" : ["SEO", "Wave", "Accessibilité"]
    },

  ]

  export default icone
  