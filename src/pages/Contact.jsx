import React, { useState, useEffect } from 'react';
import '../assets/Contact.css';

const Contact = () => {
    const [socialLinks, setSocialLinks] = useState([]);

    useEffect(() => {
        fetch('/data/socialLinks.json')
            .then(response => response.json())
            .then(data => setSocialLinks(data))
            .catch(error => console.error('Error fetching social links:', error));
    }, []);

    return (
        <div id="contact" className="page active">
            <section className="section contact">
                <div className="section-header">
                    <h2 className="section-title">Let's Connect</h2>
                    <p className="section-subtitle">I'm always open to discussing new opportunities</p>
                </div>
                <div className="contact-content">
                    <p>Whether you have a project in mind or just want to chat about technology, feel free to reach out!</p>
                    <div className="hero-buttons" style={{ justifyContent: "center", marginTop: "2rem" }}>
                        <a href="mailto:alex@example.com" className="btn btn-primary">
                            <i className="fas fa-envelope"></i> Send Email
                        </a>
                        <a href="/cv.txt" className="btn btn-secondary" download>
                            <i className="fas fa-download"></i> Download CV
                        </a>
                    </div>
                    <div className="social-links">
                        {socialLinks.map(link => (
                            <a key={link.name} href={link.url} className="social-link" target="_blank" rel="noopener noreferrer">
                                <i className={link.icon}></i>
                            </a>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
