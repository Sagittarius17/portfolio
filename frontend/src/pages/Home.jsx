import React from 'react';
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const Home = () => {
  const location = useLocation();
  const username = localStorage.getItem('username');
  console.log("username", username)

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="scroll-smooth text-white">
      <section id="home" className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4">Hi, I'm {username}</h1>
          <p className="text-lg md:text-xl">I'm a Full Stack Developer.</p>
        </div>
      </section>

      <section id="about" className="scroll-section min-h-screen bg-gray-800">
        <About />
      </section>

      <section id="projects" className="scroll-section min-h-screen bg-gray-600">
        <Projects />
      </section>

      <section id="contact" className="scroll-section min-h-screen bg-gray-800">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
