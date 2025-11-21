import React, { useState, useEffect } from 'react';
import projectsData from '../../public/data/projects.json';

const Projects = () => {
  const [projects, setProjects] = useState([]);

//   useEffect(() => {
//     fetch('/data/projects.json')
//       .then(response => response.json())
//       .then(data => setProjects(data));
//   }, []);
useEffect(() => {
    setProjects(projectsData);
  }, []);

  return (
    <div id="projects">
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">Some of my recent work</p>
            </div>
            <div className="projects-grid">
                {projects.map(project => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} className="project-image" />
                        <div className="project-content">
                            <h3 className="project-title">{project.title}</h3>
                            <p className="project-description">{project.description}</p>
                            <div className="project-tags">
                                {project.tags.map(tag => (
                                    <span className="tag" key={tag}>{tag}</span>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};

export default Projects;
