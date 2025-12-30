import { motion } from 'framer-motion';

const SectionHeader = ({ subtitle, title, description, highlight = "" }) => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <motion.div
      className="text-center mb-16"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {subtitle && (
        <motion.span variants={itemVariants} className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-4">
          {subtitle}
        </motion.span>
      )}
      
      {title && (
        <motion.h2 variants={itemVariants} className="text-4xl md:text-5xl font-bold mb-4">
          {title} {highlight && <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{highlight}</span>}
        </motion.h2>
      )}
      
      {description && (
        <motion.p variants={itemVariants} className="text-gray-400 max-w-2xl mx-auto text-lg">
          {description}
        </motion.p>
      )}
    </motion.div>
  );
};

export default SectionHeader;
