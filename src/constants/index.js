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
    citi,
    BNY,
    Cognizant,
   
    threejs,
    EMart,
    expense ,
    hospital,
    Job,
    Mobile

  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "skills",
      title: "Skills",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "projects",
      title: "Projects",
    },
    {
      id: "certifications",
      title: "Certifications",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Senior UI Developer",
      icon: UI,
    },
    {
      title: "Senior Frontend Developer",
      icon: frontend,
    },
    
    {
      title: "Frontend Developer",
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
      title: "Senior UI Developer",
      company_name: "Citibank",
      icon: citi,
        iconBg: "#FFE4E1",
      date: "January 2024 - Present",
      desc: 
        "Developing modular, high-performance Angular SPAs with optimized rendering and lazy loading. Integrated RESTful, Python, and LLM APIs for dynamic, conversational experiences while improving UI stability to 98% through automated testing."
    },
    {
     title: "Senior Frontend Developer",
      company_name: "BNY Mellon",
      icon: BNY,
        iconBg: "#FFC0CB",
      date: "July 2023 - December 2023",
      desc: 
        "Built interactive React dashboards and drag-and-drop workflows, boosting engagement by 40%. Streamlined CI/CD pipelines with Docker and Jenkins, reducing release cycles by 35% and modernizing deployments on AWS."
      },
    {
      title: "Frontend Developer",
      company_name: "Cognizant",
      icon: Cognizant,
        iconBg: "#FFB6C1",
      date: "July 2018 - December 2021",
    desc:
        "Delivered responsive, accessible Next.js apps with REST and GraphQL integrations. Migrated legacy jQuery to React 17 and deployed cloud-native apps on GCP, enhancing performance and maintainability."
    },
    
  ];
  
  const projects = [
    {
      name: "E-Mart Application",
      description:"E-Mart application is a user-friendly shopping platform offering a diverse range of products with seamless navigation and secure transactions, providing a convenient online shopping experience for customers.",
      descSize: "lg",
      tags: [
        {
          name: "React JS",
          color: "blue-text-gradient",
        },
        {
          name: "JavaScript",
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
      descSize: "lg",
      tags: [
        {
          name: "angular",
          color: "orange-text-gradient",
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
      descSize: "lg",
      tags: [
        {
          name: "angular",
          color: "orange-text-gradient",
        },
        {
          name: "TypeScript",
          color: "blue-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hospital,
      source_code_link: "https://github.com/PrathyuGIT2/hospital_appointment_angular",
       },
       {
        name: "Job Portal",
        description:
          " A job portal is an online platform that connects job seekers with employers by allowing users to search for job openings, submit applications, and post resumes. It facilitates recruitment processes by providing tools for job matching, candidate management, and application tracking.",
          descSize: "lg",
        tags: [
          {
            name: "angular",
            color: "pink-text-gradient",
          },
          {
            name: "TypeScript",
            color: "green-text-gradient",
          },
          {
            name: "css",
            color: "blue-text-gradient",
          },
        ],
        image: Job,
        source_code_link: "https://github.com/PrathyuGIT2/Job-Portal",
         },
         {
          name: "Mobile Mart",
          description:
            "Mobile Mart is a mobile shopping application designed to provide users with a seamless experience for purchasing smartphones and accessories. Built with a robust architecture and modern technologies, PhoneMart ensures fast performance, secure transactions.",
            descSize: "lg",
            tags: [
            {
              name: "react",
              color: "green-text-gradient",
            },
            {
              name: "javaScript",
              color: "blue-text-gradient",
            },
            {
              name: "css",
              color: "orange-text-gradient",
            },
          ],
          image: Mobile,
          source_code_link: "https://github.com/PrathyuGIT2/Mobile-Mart",
           },
  ];
  
  export { services, technologies, experiences, projects };