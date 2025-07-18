import React from "react";
import "./ProjectCSS.css";
import Projectitem from "./Projectitem";
import ContactList from "./Images/Tour_Nest.png";
import eCommerceStore from "./Images/Stay_Planner.png";
import TripConnect from "./Images/AI_Interview.png";
import SAMS from "./Images/Notes_App.png";

const Project = () => {
  const projectData = [
    {
      sourceCodeLink: "https://github.com/shiv-xm/Ai-Interview-Mock",
      deployedLink: "https://ai-interview-mocker-five-pink.vercel.app/",
      name: "AI-Mock Interview",
      description:
        "The AI Mock Interview platform offers realistic AI-driven simulations with instant feedback. Built with Next.js, Gemini API, PostgreSQL, Neon Serverless, and Drizzle ORM, it ensures a fast, scalable, and user-friendly experience for effective interview preparation.The platform personalizes questions based on user-selected roles and difficulty levels, closely mimicking real-world interview scenarios.",
      languages:
        "React JS | Tailwind css | Next.js | PostgreSQL | React Router | Gemini API ",
      image: TripConnect,
    },
    {
      sourceCodeLink: "https://github.com/shiv-xm/Stay_Planner-PRO",
      deployedLink: "https://stay-planner-pro.vercel.app/",
      name: "Stay-Planner-ro",
      description:
        "Stay Planner Pro is a full-stack hotel booking website built with React JS, Node.js, Express.js, and MongoDB. It features a responsive design, secure authentication, hotel filtering, booking management, and PayPal payments. An admin dashboard allows efficient management of listings and reservations. Styled with Tailwind CSS, it ensures a seamless and scalable booking experience. Real-time availability updates and automated email confirmations enhance user convenience and trust.",
      languages:
        "React JS | Node.js | Express.js | MongoDB | Mongoose | React Router | JWT |  Tailwind CSS",
      image: eCommerceStore,
    },
    
    {
      sourceCodeLink: "https://github.com/shiv-xm/Tour_Nest",
      deployedLink: "https://shiv-xm.github.io/Tour_Nest/",
      name: "Tour Nest",
      description:
        "The Dynamic Tour Website is meticulously crafted with HTML, CSS, and JavaScript, inviting users to embark on a virtual journey that mirrors the excitement and adventure of real-world exploration.It features interactive UI elements, smooth scrolling, and visually rich content to captivate visitors at every step.Optimized for responsiveness, it ensures a consistent and immersive experience across all devices",
      languages: "HTML | CSS | Javascript ",
      image: ContactList,
    },
    {
      sourceCodeLink: "https://github.com/shiv-xm/Notes-App",
      deployedLink: "https://notesapp-bivy.vercel.app/",
      name: "Notes App",
      description:
        "The Notes app is a simple yet secure & flexible note taking app for all your day to day notes. Let it be some groccery items that you need to remember or, some serious lecture notes from your college/school, all you have to do is login if you haven't and start writing those notes.",
      languages: "HTML | CSS | Javascript | React | MongoDB | Express | NPM ",
      image: SAMS,
    }
  ];

  return (
    <>
      <div id="Projects" className="projects-section">
        <h2>
          <i className="fas fa-project-diagram"></i> Projects
        </h2>
        <div className="projects-container">
          {projectData.map((project, index) => (
            <Projectitem
              key={index}
              sourceCodeLink={project.sourceCodeLink}
              deployedLink={project.deployedLink}
              name={project.name}
              description={project.description}
              languages={project.languages}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Project;
