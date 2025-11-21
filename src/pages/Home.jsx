import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div id="home" className="page active">
      <section className="hero">
          <div className="hero-content">
              <div className="hero-text">
                  <h1>Hi, I'm <span className="gradient-text">Alex Chen</span></h1>
                  <p className="subtitle">Full-Stack Developer & Entrepreneur</p>
                  <p>Building innovative solutions at the intersection of technology and business. Passionate about creating products that make a difference.</p>
                  <div className="hero-buttons">
                      <Link to="/projects" className="btn btn-primary">
                          <i className="fas fa-briefcase"></i> View Projects
                      </Link>
                      <Link to="/blog" className="btn btn-secondary">
                          <i className="fas fa-blog"></i> Read Blog
                      </Link>
                  </div>
              </div>
              <div className="hero-visual">
                  <div className="code-window">
                      <div className="code-header">
                          <div className="code-dot red"></div>
                          <div className="code-dot yellow"></div>
                          <div className="code-dot green"></div>
                      </div>
                      <div className="code-content">
                          <div className="code-line"><span style={{color: "#f472b6"}}>const</span> <span style={{color: "#60a5fa"}}>developer</span> = {'{'}</div>
                          <div className="code-line">  <span style={{color: "#fbbf24"}}>name</span>: <span style={{color: "#86efac"}}>"Alex Chen"</span>,</div>
                          <div className="code-line">  <span style={{color: "#fbbf24"}}>role</span>: <span style={{color: "#86efac"}}>"Full-Stack Developer"</span>,</div>
                          <div className="code-line">  <span style={{color: "#fbbf24"}}>passion</span>: <span style={{color: "#86efac"}}>"Building cool stuff"</span>,</div>
                          <div className="code-line">  <span style={{color: "#fbbf24"}}>status</span>: <span style={{color: "#86efac"}}>"Always learning"</span></div>
                          <div className="code-line">{'}'};</div>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    </div>
  );
};

export default Home;
