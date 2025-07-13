import React from 'react';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="hero">
      <h1>Hi, I'm Subhranshu Jha</h1>
      <TypeAnimation
        sequence={['Frontend Developer', 2000, 'React Enthusiast', 2000, 'MERN Stack Dev', 2000]}
        wrapper="span"
        speed={50}
        repeat={Infinity}
      />
      <p>I build web apps that are fast and beautiful.</p>
      <a href="/CV.pdf" download className="btn">Download Resume</a>
    </section>
  );
};

export default Hero;