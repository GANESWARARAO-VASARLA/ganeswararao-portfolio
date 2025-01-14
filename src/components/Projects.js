import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    Aos.init({ duration: 900 });
  }, []);

  const projects = [
    {
      title: "Portfolio",
      description:
        "A personal portfolio website developed with React, showcasing my skills and projects. Features include smooth scrolling, animations, and a dynamic project section.",
      url: "https://ganeswararao-portfolio.vercel.app",
      technologies: ["React", "HTML", "CSS", "JavaScript", "Smooth Scrolling"],
    },
    {
      title: "HRMS",
      description:
        "An advanced solution designed to manage organizational structures, streamline payroll processing, and centralize employee data. The system allows businesses to configure organization details, manage business units, departments, and locations, and visualize employee hierarchies with interactive organizational charts. It supports multilingual features (including Arabic LTR) and includes intuitive form handling for efficient data management, enhancing HR operations through automation and user-friendly design.",
      url: "Internal project for HRMS at Kloudworx Technologies Pvt. Ltd.",
      technologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "LESS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Ajax",
        "React JS",
        "Redux",
        "Flex",
        "XML",
        "JSON",
        "GitHub",
        "GitLab",
        "Restful API",
        "AWS",
        "JIRA",
        "Jasmine",
      ],
    },
    {
      title: "Onboard Tool",
      description:
        "The Onboard Tool is designed to simplify the onboarding process for new employees, providing them with necessary documents, training, and resources...",
      url: "Internal project for Onboarding Tool at COS-PHI ENGINEERING Pvt. Ltd.",
      technologies: [
        "HTML5",
        "CSS3",
        "SASS",
        "LESS",
        "JavaScript",
        "TypeScript",
        "Bootstrap",
        "Ajax",
        "React JS",
        "Redux",
        "Flex",
        "XML",
        "JSON",
        "GitHub",
        "GitLab",
        "Restful API",
        "Vercel",
        "JIRA",
        "Jasmine",
      ],
    },
    {
      title: "PDS Galaxy",
      description:
        "PDS Galaxy is an advanced accounts receivable platform that automates collections and enhances management efficiency. Upgrading the FACS work systems, it offers a user-friendly interface with modules for account notes, custom windows, and client maintenance. Key features include batch operations, imports/exports, report generation, and task automation through a schedule.",
      url: "Internal project for PDS Galaxy at COS-PHI ENGINEERING Pvt. Ltd.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Ajax",
        "React JS",
        "Redux",
        "Flex",
        "XML",
        "JSON",
        "GitHub",
        "GitLab",
        "Restful API",
        "Vercel",
        "ASANA",
        "Jasmine",
      ],
    },
    {
      title: "Heritage",
      description:
        "Heritage is a digital platform that offers educational and cultural resources related to history, art, and heritage conservation...",
      url: "Internal project for Heritage at Kloudworx Technologies Pvt. Ltd.",
      technologies: [
        "HTML5",
        "CSS3",
        "JavaScript",
        "Bootstrap",
        "Ajax",
        "Redux",
        "Flex",
        "XML",
        "JSON",
        "GitHub",
        "GitLab",
        "Restful API",
        "Vercel",
        "ASANA",
        "Jasmine",
      ],
    },
    {
      title: "MSS-Techno",
      description:
        "MSS-Techno is an innovative tech platform offering advanced technological solutions for businesses and individuals to streamline operations...",
      url: "https://mss-tech.vercel.app",
      technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap", "React JS"],
    },
  ];
  

  const [selectedProject, setSelectedProject] = useState(projects[0]);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleProjectClick = (project) => {
    setIsAnimating(true);
    setTimeout(() => {
      setSelectedProject(project);
      setIsAnimating(false);
    }, 500); // Match this time to the animation duration
  };

  return (
    <section className="projects" id="projects">
      <div className="container">
        <h2
          className="title"
          data-aos="fade-down"
          data-aos-easing="linear"
          data-aos-duration="1500"
        >
          Projects
        </h2>
        <div className="projects-layout">
          <div className="project-names" data-aos="fade-right">
            {projects.map((project, index) => (
              <div
                key={index}
                className={`project-name ${
                  selectedProject.title === project.title ? "active" : ""
                }`}
                onClick={() => handleProjectClick(project)}
              >
                {project.title}
              </div>
            ))}
          </div>
          <div
        className={`project-details ${
          isAnimating ? "slide-out" : "slide-in"
        }`}
      >
            <h3 className="details-title">{selectedProject.title}</h3>
            <p className="details-description">{selectedProject.description}</p>
            <div className="project-footer">
            <div className="details-url">
              <strong>URL: </strong>
              <a
                href={selectedProject.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                {selectedProject.url}
              </a>
            </div>
            <div className="details-technologies">
              <strong>Technologies I Used: </strong>
              <span>{selectedProject.technologies.join(", ")}</span>
            </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
