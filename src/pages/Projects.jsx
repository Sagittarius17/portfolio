import React from 'react';
import project1 from '../assets/images/project1.png';
import project2 from '../assets/images/project2.png';
import project3 from '../assets/images/project3.png';

const Projects = () => {
  const projects = [
    {
      name: 'Project 1',
      description: 'A web application that helps users manage their tasks and projects.',
      image: project1,
      link: '#',
    },
    {
      name: 'Project 2',
      description: 'An e-commerce website for a fictional clothing brand.',
      image: project2,
      link: '#',
    },
    {
      name: 'Project 3',
      description: 'A social media platform for sharing photos and videos.',
      image: project3,
      link: '#',
    },
  ];

  return (
    <section className="py-24" id="projects">
      <div className="container mx-auto px-4">
        <h2 className="text-5xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.name} className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300">
              <img src={project.image} alt={project.name} className="w-full h-64 object-cover" />
              <div className="p-8">
                <h3 className="text-2xl font-bold mb-4">{project.name}</h3>
                <p className="text-lg mb-8">{project.description}</p>
                <a href={project.link} className="text-indigo-600 font-bold hover:underline">View Project</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
