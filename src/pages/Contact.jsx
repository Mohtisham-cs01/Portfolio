import React from 'react';

const Contact = () => {
  return (
    <div id="contact" className="page active">
        <section className="section contact">
            <div className="section-header ">
                <h2 className="section-title">Let's Connect</h2>
                <p className="section-subtitle">I'm always open to discussing new opportunities</p>
            </div>
            <div className="contact-content ">
                <p>Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
                <div className="hero-buttons" style={{justifyContent: "center", marginTop: "2rem"}}>
                    <a href="mailto:alex@example.com" className="btn btn-primary">
                        <i className="fas fa-envelope"></i> Send Email
                    </a>
                    <a href="#" className="btn btn-secondary">
                        <i className="fas fa-download"></i> Download CV
                    </a>
                </div>
                <div className="social-links">
                    <a href="#" className="social-link">
                        <i className="fab fa-github"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-linkedin"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="#" className="social-link">
                        <i className="fab fa-dribbble"></i>
                    </a>
                </div>
            </div>
        </section>
    </div>
  );
};

export default Contact;
