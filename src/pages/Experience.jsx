import React, { useState, useEffect } from 'react';
import experienceData from '../../public/data/experience.json'
const Experience = () => {
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        fetch('/data/experience.json')
            .then(response => response.json())
            .then(data => setExperience(data));
    }, []);
    useEffect(() => {
        setExperience(experienceData);
    }, []);

    return (
        <div id="experience">
            <section className="section">
                <div className="section-header">
                    {/* <h2 className="section-title">Experience <span className='section-subtitle'>My professional journey</span></h2> */}
                    <p className="section-title">My professional journey</p>
                </div>
                <div className="timeline">
                    {experience.map(item => (
                        <div className="timeline-item" key={item.id}>
                            <div className="timeline-content">
                                <div className="timeline-date">{item.date}</div>
                                <h3 className="timeline-title">{item.title}</h3>
                                <p className="timeline-company">{item.company}</p>
                                <p className="timeline-description">{item.description}</p>
                                <div className="timeline-dot"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};

export default Experience;
