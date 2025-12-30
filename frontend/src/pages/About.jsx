import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const About = () => {
  const [about, setAbout] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchAbout = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/about`);
        setAbout(res.data);
      } catch (err) {
        // Error fetching about data
      } finally {
        setLoading(false);
      }
    };
    fetchAbout();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  if (loading) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center gradient-dark"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="text-center">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-16 h-16 border-4 border-blue-500/30 border-t-blue-500 rounded-full mx-auto mb-4"
          />
          <p className="text-gray-400">Loading...</p>
        </div>
      </motion.div>
    );
  }

  if (!about) {
    return (
      <motion.div
        className="min-h-screen flex items-center justify-center gradient-dark text-white"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <p className="text-center text-gray-400 text-lg">Sorry, no about information available yet.</p>
      </motion.div>
    );
  }

  return (
    <motion.section
      className="w-full py-20 gradient-dark text-white"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-8">
        {/* Section Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold mb-4">
            Get to Know Me
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
        </motion.div>

        {/* Main Content Grid */}
        <motion.div
          className="grid md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {/* Left Column - Personal Info */}
          <motion.div variants={itemVariants} className="space-y-6">
            <div className="glass-effect p-6 rounded-xl">
              <p className="text-gray-300 text-lg leading-relaxed mb-4">
                {about.summary || 'Passionate full-stack developer creating beautiful and functional web experiences.'}
              </p>
            </div>

            {/* Personal Details */}
            <div className="grid grid-cols-2 gap-4">
              {about.name && (
                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm mb-1">Name</p>
                  <p className="text-white font-semibold text-lg">{about.name}</p>
                </motion.div>
              )}
              {about.age && (
                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-xl"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm mb-1">Age</p>
                  <p className="text-white font-semibold text-lg">{about.age}</p>
                </motion.div>
              )}
              {about.address && (
                <motion.div
                  variants={itemVariants}
                  className="glass-effect p-4 rounded-xl col-span-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <p className="text-gray-400 text-sm mb-1">Location</p>
                  <p className="text-white font-semibold">{about.address}</p>
                </motion.div>
              )}
            </div>

            {/* Languages & Hobbies */}
            {(about.languages || about.hobbies) && (
              <div className="space-y-4">
                {about.languages && (
                  <motion.div
                    variants={itemVariants}
                    className="glass-effect p-4 rounded-xl"
                  >
                    <p className="text-gray-400 text-sm mb-2 font-semibold">Languages</p>
                    <div className="flex flex-wrap gap-2">
                      {(Array.isArray(about.languages) ? about.languages : about.languages?.split(',') || []).map((lang, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30"
                        >
                          {typeof lang === 'string' ? lang.trim() : lang}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}
                {about.hobbies && (
                  <motion.div
                    variants={itemVariants}
                    className="glass-effect p-4 rounded-xl"
                  >
                    <p className="text-gray-400 text-sm mb-2 font-semibold">Hobbies</p>
                    <p className="text-white">{about.hobbies}</p>
                  </motion.div>
                )}
              </div>
            )}
          </motion.div>

          {/* Right Column - Education & Experience */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Education */}
            {about.education && about.education.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-sm">📚</span>
                  Education
                </h3>
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {about.education.map((edu, idx) => (
                    <motion.div
                      key={edu._id || idx}
                      variants={itemVariants}
                      className="glass-effect p-4 rounded-xl border-l-4 border-blue-500/50 hover:border-blue-500 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-blue-300">{edu.degree}</h4>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {edu.startYear} - {edu.endYear}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{edu.institution}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}

            {/* Experience */}
            {about.experience && about.experience.length > 0 && (
              <div>
                <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                  <span className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-sm">💼</span>
                  Experience
                </h3>
                <motion.div
                  className="space-y-3"
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {about.experience.map((exp, idx) => (
                    <motion.div
                      key={exp._id || idx}
                      variants={itemVariants}
                      className="glass-effect p-4 rounded-xl border-l-4 border-purple-500/50 hover:border-purple-500 transition-all"
                    >
                      <div className="flex justify-between items-start mb-2">
                        <h4 className="font-semibold text-purple-300">{exp.position}</h4>
                        <span className="text-xs text-gray-400 bg-gray-700/50 px-3 py-1 rounded-full">
                          {exp.startYear} - {exp.endYear}
                        </span>
                      </div>
                      <p className="text-gray-300 text-sm">{exp.company}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;

