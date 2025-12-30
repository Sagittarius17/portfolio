import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Link as ScrollLink } from 'react-scroll';

const Home = () => {
  const location = useLocation();
  const username = localStorage.getItem('username') || 'Developer';

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const section = document.getElementById(id);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: 'easeOut' },
    },
  };

  const floatingVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, ease: 'easeOut' },
    },
  };

  return (
    <div className="scroll-smooth text-white overflow-x-hidden">
      {/* Hero Section */}
      <motion.section
        id="home"
        className="min-h-screen relative gradient-dark"
      // initial={{ opacity: 0 }}
      // animate={{ opacity: 1 }}
      // transition={{ duration: 0.8 }}
      >
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl"
          // animate={{ y: [0, 50, 0], x: [0, 25, 0] }}
          // transition={{ duration: 8, repeat: Infinity }}
          />
          <motion.div
            className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl"
          // animate={{ y: [0, -50, 0], x: [0, -25, 0] }}
          // transition={{ duration: 8, repeat: Infinity }}
          />
        </div>

        {/* Content */}
        <div className="flex items-center justify-center min-h-screen">
          <motion.div
            className="max-w-4xl mx-auto px-6 md:px-8 text-center relative z-10"
          // variants={containerVariants}
          // initial="hidden"
          // animate="visible"
          >
            <motion.div
              // variants={floatingVariants} 
              className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-500/20 border border-blue-500/50 rounded-full text-blue-300 text-sm font-semibold">
                Welcome to my portfolio
              </span>
            </motion.div>

            <motion.h1
              // variants={itemVariants}
              className="text-5xl md:text-7xl font-bold mb-4 leading-tight"
            >
              Hi, I'm <span className="bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">{username}</span>
            </motion.h1>

            <motion.p
              // variants={itemVariants}
              className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
            >
              A passionate <span className="text-blue-400 font-semibold">Full Stack Developer</span> creating stunning digital experiences with modern web technologies
            </motion.p>

            <motion.div
              // variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
            >
              <motion.div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.98 }}
              >
                <ScrollLink
                  to="projects"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3.5 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-600 rounded-lg font-semibold text-white cursor-pointer hover:shadow-lg hover:shadow-blue-500/60 transition-all inline-block text-center"
                >
                  View My Work
                </ScrollLink>
              </motion.div>

              <motion.div
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.98 }}
              >
                <ScrollLink
                  to="contact"
                  smooth={true}
                  duration={500}
                  className="px-8 py-3.5 border-2 border-blue-500 rounded-lg font-semibold text-white cursor-pointer hover:bg-blue-500/10 transition-all inline-block text-center"
                >
                  Get In Touch
                </ScrollLink>
              </motion.div>
            </motion.div>

            <motion.div
              // variants={itemVariants}
              className="grid grid-cols-3 gap-8 mt-20 mb-8"
            >
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-blue-300 bg-clip-text text-transparent mb-2">50+</p>
                <p className="text-gray-400 text-base font-medium">Projects</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-purple-300 bg-clip-text text-transparent mb-2">5+</p>
                <p className="text-gray-400 text-base font-medium">Years Experience</p>
              </div>
              <div className="text-center">
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-pink-400 to-pink-300 bg-clip-text text-transparent mb-2">100+</p>
                <p className="text-gray-400 text-base font-medium">Happy Clients</p>
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              // animate={{ y: [0, 10, 0] }}
              // transition={{ duration: 2, repeat: Infinity }}
              className="mt-12"
            >
              <div className="text-gray-400 text-sm">Scroll to explore</div>
              <div className="w-6 h-10 border-2 border-gray-400 rounded-full mx-auto mt-2 flex justify-center">
                <motion.div
                  // animate={{ y: [2, 6, 2] }}
                  // transition={{ duration: 2, repeat: Infinity }}
                  className="w-1 h-2 bg-blue-400 rounded-full"
                />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <section id="about" className="scroll-section w-full">
        <About />
      </section>

      {/* Skills Section */}
      <section id="skills" className="scroll-section w-full">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects" className="scroll-section w-full">
        <Projects />
      </section>

      {/* Contact Section */}
      <section id="contact" className="scroll-section w-full">
        <Contact />
      </section>
    </div>
  );
};

export default Home;
