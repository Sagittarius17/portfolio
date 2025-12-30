import { motion } from 'framer-motion';

const ProjectCard = ({ project, index = 0 }) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        delay: index * 0.1,
      },
    },
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="relative overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full bg-gradient-to-br from-slate-900 to-slate-800 border border-slate-700/50 hover:border-blue-500/60 glass-effect">
        {/* Image Container */}
        <div className="relative h-48 overflow-hidden bg-slate-800">
          <img
            src={project.imageUrl}
            alt={project.title}
            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent group-hover:from-black/40 transition-all duration-300" />
        </div>

        {/* Content */}
        <div className="p-6 text-white relative z-10">
          <h2 className="text-xl font-bold mb-2 line-clamp-2 group-hover:text-blue-400 transition-colors">
            {project.title}
          </h2>
          <p className="text-gray-300 mb-4 text-sm line-clamp-3">
            {project.description}
          </p>

          {/* Tech Stack */}
          {project.technologies && (
            <div className="flex flex-wrap gap-2 mb-4">
              {Array.isArray(project.technologies) ? (
                project.technologies.slice(0, 3).map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                  >
                    {tech}
                  </span>
                ))
              ) : null}
            </div>
          )}

          {/* Links */}
          <div className="flex gap-4">
            {project.githubLink && (
              <motion.a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-slate-700/60 hover:bg-blue-600 text-white text-sm rounded-lg transition-all flex-1 text-center font-semibold border border-slate-600/50 hover:border-blue-500"
              >
                GitHub
              </motion.a>
            )}
            {project.demoLink && (
              <motion.a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-green-500 to-green-600 hover:shadow-lg hover:shadow-green-500/50 text-white text-sm rounded-lg transition-all flex-1 text-center font-semibold"
              >
                Live Demo
              </motion.a>
            )}
          </div>
        </div>

        {/* Accent Border */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-blue-500/30 rounded-xl transition-all duration-300 pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default ProjectCard;
  