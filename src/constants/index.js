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
    Virtusa,
    Cognizant,
    BHEL,
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
      title: "Senior UI Developer",
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
      title: "Senior UI Developer",
      company_name: "Virtusa",
      icon: Virtusa,
      iconBg: "#FFFFFF",
      date: "July 2023 - Present",
      points: [
        "Developing SPAs using Angular 16, Angular Material, and TypeScript, optimizing UI performance with lazy loading and routing services, reducing load times by 40%.",
        "Integrating Angular Material UI components within an Angular 16 and Node.js, implementing MVC pattern code.",
      ],
    },
    {
      title: "Frontend Developer",
      company_name: "Cognizant",
      icon: Cognizant,
      iconBg: "#FFFFFF",
      date: "July 2018 - December 2021",
      points: [
        "Developed efficiently using Grunt and Express, creating React.js front-end screens with NPM and Redux.",
        "Translated design concepts into code using Figma, collaborating with the front-end team, resulting in a 40% increase in website engagement and a 25% decrease in bounce rate.",
      ]
    },
    {
     title: "Web Developer",
      company_name: "BHEL",
      icon: BHEL,
      iconBg: "#FFFFFF",
      date: "January 2018 - June 2018",
      points: [
        " Created web pages using HTML5, CSS3, JavaScript, Bootstrap, SASS, LESS, React JS, Redux, and Node JS.",
        "Improved website performance using React JS framework to develop SPAs, leveraging Redux architecture."
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
            "Mobile Mart is a mobile shopping application designed to provide users with a seamless experience for purchasing smartphones and accessories. Built with a robust architecture and modern technologies, PhoneMart ensures fast performance, secure transactions, and a user-friendly interface.",
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