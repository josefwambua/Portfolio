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
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    meta,
    logo,
    joygraffix,
    shopify,
    carrent,
    routerproject,
    tripguide,
    threejs,
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
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Javascript Developer",
      icon: mobile,
    },
    {
      title: "Front End Developer",
      icon: backend,
    },
    {
      title: "Data Clerk",
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
      name: "Redux Toolkit",
      icon: redux,
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
    
  ];
  
  const experiences = [
    {
      title: "Web Developer",
      company_name: "JosefTech",
      icon: logo,
      iconBg: "#383E56",
      date: "May 2023 - to date",
      points: [
        "Developing and maintaining web applications using Mern technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Clerk",
      company_name: "Joy Graffix Investiments",
      icon: joygraffix,
      iconBg: "#E6DEDD",
      date: "Jan 2022 - January 2024",
      points: [
        "Accurately input and manage data in various databases",
        "Ensure data integrity and timely updates",
        "Collaborate with team members to maintain accurate records",
        " Ensure the accuracy and completeness of data entries",
      ],
    },
  
  ];
 
  
  const projects = [
    {
      name: "3D Shirt Model App",
      description:
      "A web application for shirt customization in the fashion industry. Users can select diverse colors, alter logos, and apply AI-driven adjustments for texture, color, or logos.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "Typescript",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: carrent,
      source_code_link: "https://github.com/josefwambua/threejs_ai_project",
    },
    {
      name: "React Router App",
      description:
        "A web based model of how to use react router to connect different  pages of a website or application and mobile responsiveness",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: routerproject,
      source_code_link: "https://github.com/josefwambua/React-Router",
    },
    {
      name: "Random Quotes App",
      description:
        "Discover inspiration effortlessly on our random quotes web app. With a click, explore diverse and thought-provoking phrases, adding a touch of randomness to your day.",
      tags: [
          {
          name: "reactjs",
          color: "blue-text-gradient",
        },
        {
          name: "tailwind",
          color: "green-text-gradient",
        },
        {
          name: "restapi",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/josefwambua/random_fcc_quote_machine",
    },
  ];
  
  export { services, technologies, experiences, projects };