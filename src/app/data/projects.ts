import { IProject } from "../interfaces/IProject";

export const projects: IProject[] = [
    {
        id: 1,
        title: 'Portfolio Creator', 
        description:'Um criador arrasta e solta para criar modelos de portfólios, feito utilizando Laravel e a lib GrapeJS',
        image: 'assets/img/projects/portCreator.png',
        link: 'https://slategray-caterpillar-218989.hostingersite.com'
        
    },
    {   
        id: 2,
        title: 'Little Star Educa', 
        description:'Loja virtual da Little Star Educa com integração ao pagseguro ',
        image: 'assets/img/projects/littleStar.png',
        link: 'https://littlestareduca.com.br/'
     
    },
    {   
        id: 3,
        title: 'Ane Estudantes', 
        description:'Desenvolvimento de sistema para emissão de carteirinhas de estudantes junto ao site de validação',
        image: 'assets/img/projects/ane.png',
        link: 'https://www.aneestudantes.com.br/'
       
    },
    
  
 

]