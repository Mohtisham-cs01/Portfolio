import React from 'react';

const About = () => {
  return (
    <div id="" className="">
        <section className="section">
            <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Crafting digital experiences with passion and precision</p>
            </div>
            <div className="about-content">
                <div className="about-image">
                    <div className="image-frame">
                        <img src="https://picsum.photos/seed/developer/400/400.jpg" alt="Alex Chen" />
                    </div>
                </div>
                <div className="about-text">
                    <h3>Building the Future, One Line at a Time</h3>
                    <p>With over 5 years of experience in software development and entrepreneurship, I've had the privilege of working with startups and established companies to bring innovative ideas to life.</p>
                    <p>My journey began with a curiosity about how things work and evolved into a passion for creating solutions that solve real-world problems. I believe in the power of technology to transform businesses and improve lives.</p>
                    <div className="stats">
                        <div className="stat">
                            <div className="stat-number">50+</div>
                            <div className="stat-label">Projects Delivered</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">5+</div>
                            <div className="stat-label">Years Experience</div>
                        </div>
                        <div className="stat">
                            <div className="stat-number">15+</div>
                            <div className="stat-label">Happy Clients</div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
};

export default About;
