import React, { useEffect, useRef } from 'react';
import projectsArray from './projectsData';
import liveIcon from './assets/play-circle.svg';
import repoIcon from './assets/github.svg';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './styles/projects.scss';

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const projects = sectionRef.current.querySelectorAll('.project-textbox');
    projects.forEach((project) => {
      gsap.fromTo(
        project,
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          scrollTrigger: {
            trigger: project,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'restart none',
          },
        }
      );
    });
  }, []);

  return (
    <section ref={sectionRef} className="projects-section">
      {projectsArray.map((project, index) => (
        <div key={index} className="project">
          <img
            className="project-image"
            src={project.image}
            alt={project.name}
          />
          <div className="project-textbox">
            <h2>{project.name}</h2>
            <p>{project.description}</p>
            <hr />
            <p>{project.subheader}</p>
            <div className="project-icon-container">
              <a
                href={project.liveLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="project-icon" src={liveIcon} alt="Live Link" />
              </a>
              <a
                href={project.codeLink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img className="project-icon" src={repoIcon} alt="Code Link" />
              </a>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default Projects;
