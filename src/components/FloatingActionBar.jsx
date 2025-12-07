import React from 'react';
import { NavLink } from 'react-router-dom';
import '../assets/FloatingActionBar.css';
import { FaHome, FaUser, FaCode, FaLaptopCode, FaBlog, FaBriefcase, FaEnvelope } from 'react-icons/fa';

const FloatingActionBar = () => {
  return (
    <div className="floating-action-bar">
      <NavLink to="/" className="fab-link" activeClassName="active">
        <FaHome />
      </NavLink>
      <NavLink to="/about" className="fab-link" activeClassName="active">
        <FaUser />
      </NavLink>
      <NavLink to="/skills" className="fab-link" activeClassName="active">
        <FaCode />
      </NavLink>
      <NavLink to="/projects" className="fab-link" activeClassName="active">
        <FaLaptopCode />
      </NavLink>
      <NavLink to="/blog" className="fab-link" activeClassName="active">
        <FaBlog />
      </NavLink>
      <NavLink to="/experience" className="fab-link" activeClassName="active">
        <FaBriefcase />
      </NavLink>
      <NavLink to="/contact" className="fab-link" activeClassName="active">
        <FaEnvelope />
      </NavLink>
    </div>
  );
};

export default FloatingActionBar;
