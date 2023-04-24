import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    cprog,
    laravel,
    php,
    python,
    rootme,
    symfony,
    mysql,
    figma,
    docker,
    campusacademy,
    ecole42,
    chevrollier,
    epitech,
    threejs,
    portfolio,
    paw,
    hawkscan,
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "À propos",
    },
    {
      id: "work",
      title: "Projets",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Développeur Frontend",
      icon: web,
    },
    {
      title: "Développeur React Native",
      icon: mobile,
    },
    {
      title: "Développeur Backend",
      icon: backend,
    },
    {
      title: "Créateur de contenu",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "C",
      icon: cprog,
    },
    {
      name: "Laravel",
      icon: laravel,
    },
    {
      name: "PHP",
      icon: php,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Symfony",
      icon: symfony,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "MySql",
      icon: mysql,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
    {
      name: "Root-Me",
      icon: rootme,
    },
  ];
  
  const experiences = [
    {
      title: "BTS développeur web fullstack",
      company_name: "Epitech",
      icon: epitech,
      iconBg: "#E6DEDD",
      date: "Nov 2020 - Nov 2022",
      points: [
        "Développer et maintenir des applications web en utilisant React.js et d'autres technologies connexes.",
        "Découverte et apprentissage des langage php et des framework tel que Laravel et Symfony.",
        "Épreuves (piscine) sur l'algorithmie ou la cybersécurité.",
        "Participer aux revues de code et fournir un retour d'information constructif aux autres développeurs, avec des travaux de groupe en utilisant la méthode agile.",
      ],
    },
    {
      title: "Formation résaux informatiques",
      company_name: "Campus Academy",
      icon: campusacademy,
      iconBg: "#383E56",
      date: "Oct 2018 - Juin 2019",
      points: [
        "Création de serveurs.",
        "Maintenance des systèmes d'informations, architectures de serveurs physiques (switch, rooter).",
        "Apprentissage à la sécurité des serveurs.",
      ],
    },
    {
      title: "Piscine C",
      company_name: "École 42",
      icon: ecole42,
      iconBg: "#E6DEDD",
      date: "Août 2017",
      points: [
        "Épreuves de la piscine de l'école 42 apprentissages des bases en shell, bash.",
        "Apprentissage intensif du langage de programmation C.",
        "Colle (évaluations) tous les vendredis après-midi pendant 4 h avec des sujets qui tombes aléatoirement.",
        "Bonne ambiance et manque de sommeils.",
      ],
    },
    {
      title: "Bac Pro Systèmes numériques et réseaux",
      company_name: "Lycée Chevrollier",
      icon: chevrollier,
      iconBg: "#383E56",
      date: "Sept 2014 - Juin 2017",
      points: [
        "Création de serveurs.",
        "Maintenance des systèmes d'informations, architectures de serveurs physiques (switch, rooter).",
        "Montage et démontage d'ordinateurs, création de câbles RJ45, prise en main de logiciel de modélisation 3D.",
      ],
    },
  ];
  
  const projects = [
    {
      name: "Portfolio",
      description:
        "Portfolio développé en React en ajoutant le framework Threejs afin de me former dessus pour offrir un rendu visuel de mon CV.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Threejs",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: portfolio,
      source_code_link: "https://github.com/Ph4nToM00/Portfolio",
    },
    {
      name: "Peek-A-Who",
      description:
        "Logiciel de recherche automatisé pour l'OSINT, recherche poussé avec utilisation de reconnaissance faciale.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "html",
          color: "green-text-gradient",
        },
        {
          name: "OSINT",
          color: "pink-text-gradient",
        },
      ],
      image: paw,
      source_code_link: "https://github.com/c0dejump/Peek-A-Who",
    },
    {
      name: "Hawkscan",
      description:
        "Outil de sécurité pour la reconnaissance et la collecte d'informations sur un site web. développer en python et développer en html.",
      tags: [
        {
          name: "Python",
          color: "blue-text-gradient",
        },
        {
          name: "Html",
          color: "green-text-gradient",
        },
        {
          name: "Cybersécurité",
          color: "pink-text-gradient",
        },
      ],
      image: hawkscan,
      source_code_link: "https://github.com/c0dejump/HawkScan",
    },
  ];
  
  export { services, technologies, experiences, projects };
  