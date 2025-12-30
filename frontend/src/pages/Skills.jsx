import { useEffect, useState } from 'react';
import axios from 'axios';
import { motion } from 'framer-motion';

const BASE_URL = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5000';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('all');

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const res = await axios.get(`${BASE_URL}/api/skills/public`);
        setSkills(res.data);
      } catch (err) {
        // Error fetching skills
      }
    };

    fetchSkills();
  }, []);

  const categories = ['all', ...new Set(skills.map(s => s.category).filter(Boolean))];
  const filteredSkills = selectedCategory === 'all'
    ? skills
    : skills.filter(s => s.category === selectedCategory);

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
      transition: { duration: 0.5 },
    },
  };

  const getLevelColor = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert':
      case 'advanced':
        return 'from-green-500 to-emerald-500';
      case 'intermediate':
        return 'from-blue-500 to-cyan-500';
      case 'beginner':
        return 'from-yellow-500 to-orange-500';
      default:
        return 'from-purple-500 to-pink-500';
    }
  };

  const getLevelPercentage = (level) => {
    switch (level?.toLowerCase()) {
      case 'expert':
        return 95;
      case 'advanced':
        return 85;
      case 'intermediate':
        return 70;
      case 'beginner':
        return 50;
      default:
        return 75;
    }
  };

  return (
    <motion.section
      className="w-full py-20 gradient-dark"
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
            My Expertise
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
            Skills &amp; <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">Expertise</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            Here are the technologies and skills I've mastered
          </p>
        </motion.div>

        {/* Category Filter */}
        {categories.length > 1 && (
          <motion.div
            className="flex flex-wrap justify-center gap-3 mb-12"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            {categories.map(category => (
              <motion.button
                key={category}
                onClick={() => setSelectedCategory(category)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-2 rounded-full font-semibold capitalize transition-all ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-lg shadow-blue-500/50'
                    : 'bg-gray-800 text-gray-300 border border-gray-700 hover:border-blue-500/50'
                }`}
              >
                {category}
              </motion.button>
            ))}
          </motion.div>
        )}

        {/* Skills Grid */}
        {skills.length === 0 ? (
          <motion.div
            className="text-center py-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-400 text-lg">No skills available yet.</p>
          </motion.div>
        ) : (
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {filteredSkills.map((skill, idx) => (
              <motion.div
                key={skill._id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="group"
              >
                <div className="glass-effect p-6 rounded-xl hover:border-blue-500/50 transition-all h-full flex flex-col">
                  {/* Skill Header */}
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                        {skill.name}
                      </h3>
                      {skill.level && (
                        <p className={`text-sm font-semibold bg-gradient-to-r ${getLevelColor(skill.level)} bg-clip-text text-transparent`}>
                          {skill.level}
                        </p>
                      )}
                    </div>
                    {skill.level && (
                      <span className="text-sm text-gray-400 ml-2">
                        {getLevelPercentage(skill.level)}%
                      </span>
                    )}
                  </div>

                  {/* Progress Bar */}
                  {skill.level && (
                    <div className="mb-4 flex-1">
                      <div className="w-full bg-gray-700/50 rounded-full h-2 overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${getLevelPercentage(skill.level)}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, ease: 'easeOut' }}
                          className={`h-full bg-gradient-to-r ${getLevelColor(skill.level)} rounded-full`}
                        />
                      </div>
                    </div>
                  )}

                  {/* Category Badge */}
                  {skill.category && (
                    <div className="mt-auto">
                      <span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 text-xs rounded-full border border-blue-500/30">
                        {skill.category}
                      </span>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          {[
            { label: 'Skills Mastered', value: skills.length },
            { label: 'Categories', value: categories.length - 1 },
            { label: 'Years of Experience', value: '5+' },
          ].map((stat, idx) => (
            <motion.div
              key={idx}
              className="glass-effect p-8 rounded-xl text-center"
              whileHover={{ scale: 1.05 }}
            >
              <div className={`text-4xl font-bold bg-gradient-to-r ${getLevelColor('expert')} bg-clip-text text-transparent mb-2`}>
                {stat.value}
              </div>
              <p className="text-gray-400">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Skills;
