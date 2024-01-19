import {
    frontend,
    web,
    UI,
    javascript,
    angular,
    typescript,
    html,
    css,
    reactjs,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    BNYM,
    Abbvie,
    JLP,
    threejs,
    EMart,
    expense ,
    hospital

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "UI Developer",
      icon: UI,
    },
    {
      title: "Frontend Developer",
      icon: frontend,
    },
    
    {
      title: "Web Developer",
      icon: web,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "angular",
      icon: angular,
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
  ];
  
  const experiences = [
    {
      title: "UI Developer",
      company_name: "Bank of Newyork Mellon",
      icon: BNYM,
      iconBg: "#383E56",
      date: "July 2023 - December 2023",
      points: [
        "Involved in creating single page application that loads multiple views using routing services, lazy Loading, and adding additional dynamic features to the application using Angular 16 framework",
        "Utilized ES6 features to enhance JavaScript code readability, maintainability, and efficiency in web development projects.",
        "Integrated and customized UI components from Angular Material and other relevant libraries to enhance the visual and user experience of Angular applications",
        "Automated production build and test procedure, utilizing Docker build scripts along with Gradle."
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Abbvie",
      icon: Abbvie,
      iconBg: "#383E56",
      date: "May 2020 - December 2021",
      points: [
        "Developed user application for React JS Virtual Dom and React views rendering using components which contains additional components called custom HTML tags.",
        "Expertise in React.js for creating interactive UI's using One-way data flow, Virtual DOM, JSX, React Native concepts. ",
        "Responsible to Style, look and feel of the web page with SASS that extends CSS with dynamic behavior such as variable, mixing, operations, and functions.",
        "Used Node Package Manager (NPM) to manage modules & used it to install useful tools as Grunt, and Express.",
      ],
    },
    {
     title: "Web Developer",
      company_name: "John Lewis Partnership",
      icon: JLP,
      iconBg: "#383E56",
      date: "July 2018 - May 2020",
      points: [
        " Utilized @NgModule to import various modules, declare components, and specify providers and services, contributing to the development of Angular 6/7/8/9 applications",
        "Integrated ActiveMQ and spring JMS API to send and receive message for the application’s Restful API.",
        "Involved AWS Elastic Beanstalk for deploying and scaling web applications and services developed with Java, Node.js and Docker on familiar servers such as Apache",
        "Created Angular 9 parent and child components in the application using Angular CLI command ng generate component",
      ],
    }
    
  ];
  
  const projects = [
    {
      name: "E-Mart Application",
      description:"E-Mart application is a user-friendly shopping platform offering a diverse range of products with seamless navigation and secure transactions, providing a convenient online shopping experience for customers.",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: EMart,
      source_code_link: "https://github.com/PrathyuGIT2/E-Mart-Application",
    },
    {
      name: " Expense Tracker",
      description:
        "An expense tracker application helps users easily monitor and manage their spending by recording and categorizing financial transactions, providing a clear overview of their budget and expenses.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: expense,
      source_code_link: "https://github.com/PrathyuGIT2/expense-tracker",
    },
    {
      name: "Hospital Appointment",
      description:
        " A hospital appointment application streamlines the scheduling process, allowing users to efficiently book and manage medical appointments online, enhancing accessibility and convenience.",
      tags: [
        {
          name: "angular",
          color: "blue-text-gradient",
        },
        {
          name: "TypeScript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/PrathyuGIT2/hospital_appointment_angular",
    },
  ];
  
  export { services, technologies, experiences, projects };