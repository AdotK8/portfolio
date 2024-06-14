import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import projectsArray from './projectsData';
import githubIcon from './assets/github-purple.svg';
import playIcon from './assets/play-circle.svg';
import './styles/projects.scss';

gsap.registerPlugin(ScrollTrigger);

function Projects() {
  const sectionRef = useRef(null);

  // gsap effects for projects scroll
  useEffect(() => {
    const projectsTextbox = sectionRef.current.querySelectorAll('.project');

    projectsTextbox.forEach((project) => {
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

  const handleLiveClick = (e, liveLink) => {
    e.preventDefault();
    window.open(liveLink, '_blank', 'noopener,noreferrer');
  };

  const handleCodeClick = (e, project) => {
    e.preventDefault();
    if (project.name.includes('Yase Property')) {
      window.open(project.backendLink, '_blank', 'noopener,noreferrer');
      window.open(project.frontendLink, '_blank', 'noopener,noreferrer');
    } else {
      window.open(project.codeLink, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section ref={sectionRef} className="projects-section" id="projects">
      {projectsArray.map((project) => (
        <div key={project.id} className="project">
          <div className="project-left">
            <img
              className="project-image"
              src={project.image}
              alt={project.name}
            />
          </div>
          <div className="project-right">
            <div className="project-textbox">
              <h2>{project.name}</h2>
              <p>{project.description}</p>
              <hr />
              <p>{project.subheader}</p>
              <div className="project-icon-container">
                <a
                  onClick={(e) => handleLiveClick(e, project.liveLink)}
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name}`}
                >
                  <img
                    src={playIcon}
                    className="project-icon"
                    alt="Play Icon"
                  />
                </a>

                <a
                  onClick={(e) => handleCodeClick(e, project)}
                  href={project.codeLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`View ${project.name} on GitHub`}
                >
                  <img
                    src={githubIcon}
                    className="project-icon"
                    alt="GitHub Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Projects;
