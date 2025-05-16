const ProjectCard = ({ project }) => {
    return (
      <div className="bg-white text-black shadow-lg rounded-lg overflow-hidden">
        <img src={project.imageUrl} alt={project.title} className="w-full h-48 object-cover" />
        <div className="p-4">
          <h2 className="text-xl font-semibold">{project.title}</h2>
          <p className="text-gray-600 mb-2">{project.description}</p>
          <div className="space-x-4">
            {project.githubLink && <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-blue-500">GitHub</a>}
            {project.demoLink && <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-green-500">Demo</a>}
          </div>
        </div>
      </div>
    );
  };
  
  export default ProjectCard;
  