import React, { useState, useEffect } from 'react';
import skillsData from '../../public/data/skills.json';

const Skills = () => {
  const [skills, setSkills] = useState([]);

//   useEffect(() => {
//     fetch('/data/skills.json')
//       .then(response => response.json())
//       .then(data => setSkills(data));
//   }, []);

  useEffect(() => {
    setSkills(skillsData); // synchronous, no delay
  }, []);
  return (
    <div>
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">Technologies I love working with</p>
            </div>
            <div className="skills-grid">
                {skills.map(skill => (
                    <div className="skill-card" key={skill.id}>
                        <div className="skill-icon">
                            <i className={skill.icon}></i>
                        </div>
                        <h3 className="skill-title">{skill.title}</h3>
                        <p className="skill-description">{skill.description}</p>
                    </div>
                ))}
            </div>
        </section>
    </div>
  );
};

export default Skills;
