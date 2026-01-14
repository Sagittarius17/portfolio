import React from 'react';

const ProjectCard = ({ project }) => {
  return (
    <a href={project.html_url} target="_blank" rel="noopener noreferrer">
      <div className="relative rounded-lg overflow-hidden shadow-lg group h-56">
        <img
          className="absolute inset-0 w-full h-full object-cover"
          src={`https://picsum.photos/seed/${project.id}/400/300`}
          alt={project.name}
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 group-hover:bg-opacity-60 transition-all duration-300"></div>
        <div className="relative h-full flex flex-col justify-end p-4">
          <h3 className="text-xl font-bold text-white">{project.name}</h3>
        </div>
      </div>
    </a>
  );
};

export default ProjectCard;
