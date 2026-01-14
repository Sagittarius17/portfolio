import React from 'react';

const ProjectCard = ({ project }) => {
    const randomImageId = Math.floor(Math.random() * 1000);
    const imageUrl = `https://picsum.photos/id/${randomImageId}/300/200`;

    return (
        <div className="card project-card flex flex-col">
            <img src={imageUrl} alt={project.name} className="w-full h-40 object-cover" />
            <div className="p-4 flex-grow flex flex-col">
                <h3 className="text-xl font-bold mb-2">{project.name}</h3>
                <p className="text-sm flex-grow">{project.description}</p>
                <a href={project.html_url} target="_blank" rel="noopener noreferrer" className="mt-4 inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold py-1 px-3 rounded-lg text-sm self-start transition-colors duration-300">
                    View on Github
                </a>
            </div>
        </div>
    );
};

export default ProjectCard;
