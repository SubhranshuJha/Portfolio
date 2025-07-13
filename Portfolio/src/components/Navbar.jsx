import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Subhranshu</h1>
      <ul>
        <li><a href="#about">About</a></li>
        <li><a href="#skills">Skills</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <div className="socials">
        <a href="https://github.com/SubhranshuJha"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/subhranshu-jha-33b89131a/"><FaLinkedin /></a>
      </div>
    </nav>
  );
};

export default Navbar;