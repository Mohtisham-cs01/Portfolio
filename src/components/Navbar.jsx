import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import '../assets/Navbar.css';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <nav id="navbar">
      <div className="nav-container">
        <NavLink to="/" className="logo">
          AC
        </NavLink>
        <div className="nav-links" id="navLinks">
          <NavLink to="/" className="nav-link" activeClassName="active" exact>
            Home
          </NavLink>
          <NavLink to="/about" className="nav-link" activeClassName="active">
            About
          </NavLink>
          <NavLink to="/skills" className="nav-link" activeClassName="active">
            Skills
          </NavLink>
          <NavLink to="/projects" className="nav-link" activeClassName="active">
            Projects
          </NavLink>
          <NavLink to="/blog" className="nav-link" activeClassName="active">
            Blog
          </NavLink>
          <NavLink to="/experience" className="nav-link" activeClassName="active">
            Experience
          </NavLink>
          <NavLink to="/contact" className="nav-link" activeClassName="active">
            Contact
          </NavLink>
          <button className="theme-toggle" id="themeToggle" onClick={toggleTheme}>
            <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
          </button>
        </div>
        <button className="mobile-menu-toggle" id="mobileMenuToggle">
          <i className="fas fa-bars"></i>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
