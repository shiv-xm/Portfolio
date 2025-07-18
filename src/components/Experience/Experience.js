import React, { useState } from "react";
import "./ExperienceCSS.css";

const Experience = () => {
  const experiences = [
    {
      role: "Frontend Developer",
      organization: "Webknot Technologies",
      duration: "May 2024 - June 2024",
      details:
        "Developed User Onboarding for the Super Admin Portal, enhancing UX and efficiency. Implemented and maintained key features across multiple portals, ensuring seamless functionality. Debugged and optimized the application for better performance."
    },
    {
      role: "Joint Secretary",
      organization: "Social Services Council, RGIPT",
      duration: "August 2024 - Present",
      details:
        "Led and managed various community service initiatives and social awareness programs at RGIPT, encouraging student participation and engagement in meaningful activities."
    },
    {
      role: "Teaching Assistant",
      organization: "RGIPT",
      duration: "August 2024 - Nov 2024",
      details:
        "Assisted in teaching C Programming for 1st-year students, helping with coursework, conducting tutorials, and clarifying concepts to improve student understanding."
    },
    {
      role: "Graphic Designer Head",
      organization: "Google Developer Student Club, RGIPT",
      duration: "June 2024 - Oct 2024",
      details:
        "Led the graphic design team, creating visual content for events, hackathons, and workshops. Managed branding and marketing materials to enhance outreach and engagement."
    },
    {
      role: "Technical Coordinator",
      organization: "OWASP Club, RGIPT",
      duration: " June 2023 - Dec 2023",
      details:
        "Organized and conducted cybersecurity workshops and technical sessions, promoting awareness and education in the field of web security."
    }
  ];

  const [expanded, setExpanded] = useState({});

  const toggleExpanded = (index) => {
    setExpanded((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <section id="Experience" className="experience-section">
      <h2 className="section-title">
        <i className="fa-solid fa-business-time"></i> Experience
      </h2>
      <div className="experience-timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-content">
              <h3>{experience.role}</h3>
              <p className="organization">{experience.organization}</p>
              <span className="duration">{experience.duration}</span>
              <p className="details">
                {expanded[index]
                  ? experience.details
                  : `${experience.details.substring(0, 250)}...`} {" "}
                <span
                  className="toggle-button"
                  onClick={() => toggleExpanded(index)}
                  style={{ color: "#0078d4", cursor: "pointer" }}
                >
                  {expanded[index] ? "See Less" : "See More"}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
