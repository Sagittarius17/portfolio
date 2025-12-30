import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navItems = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Skills', id: 'skills' },
    { label: 'Projects', id: 'projects' },
    { label: 'Contact', id: 'contact' },
  ];

  const navVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  return (
    <motion.nav 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="glass-effect fixed w-full z-50 top-0 border-b border-blue-500/20 shadow-2xl"
    >
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center h-[70px]">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <ScrollLink
            to="home"
            smooth={true}
            duration={500}
            className="text-2xl font-bold cursor-pointer bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent hover:from-blue-300 hover:to-purple-400 transition-all"
          >
            Portfolio
          </ScrollLink>
        </motion.div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <motion.button 
            onClick={toggleMenu} 
            className="focus:outline-none p-2 hover:bg-blue-500/10 rounded-lg transition"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 items-center">
          {navItems.map((item, i) => (
            <motion.div
              key={item.id}
              custom={i}
              variants={navVariants}
              initial="hidden"
              animate="visible"
            >
              <ScrollLink
                to={item.id}
                smooth={true}
                duration={500}
                className="text-white cursor-pointer hover:text-blue-400 transition-colors relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </ScrollLink>
            </motion.div>
          ))}

          {token ? (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={navItems.length}
              variants={navVariants}
              className="flex gap-4 items-center"
            >
              <Link to="/admin" className="text-white hover:text-blue-400 transition-colors">
                {username || 'Admin'}
              </Link>
              <motion.button
                onClick={handleLogout}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-red-500/50 transition-all"
              >
                Logout
              </motion.button>
            </motion.div>
          ) : (
            <motion.div
              initial="hidden"
              animate="visible"
              custom={navItems.length}
              variants={navVariants}
            >
              <Link to="/login" className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-blue-500/50 transition-all hover:scale-105">
                Login
              </Link>
            </motion.div>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      <motion.div
        initial={{ opacity: 0, height: 0 }}
        animate={{ opacity: isOpen ? 1 : 0, height: isOpen ? 'auto' : 0 }}
        transition={{ duration: 0.3 }}
        className="md:hidden overflow-hidden glass-effect border-t border-blue-500/20"
      >
        <div className="px-4 py-4 flex flex-col gap-4">
          {navItems.map((item) => (
            <ScrollLink
              key={item.id}
              to={item.id}
              smooth={true}
              duration={500}
              className="text-white hover:text-blue-400 transition-colors cursor-pointer py-2"
              onClick={toggleMenu}
            >
              {item.label}
            </ScrollLink>
          ))}
          <hr className="border-blue-500/20 my-2" />
          {token ? (
            <>
              <Link to="/admin" className="text-white hover:text-blue-400 transition-colors py-2" onClick={toggleMenu}>
                {username || 'Admin'}
              </Link>
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-gradient-to-r from-red-500 to-red-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all text-left"
              >
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/login"
              className="px-4 py-2 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all text-center"
              onClick={toggleMenu}
            >
              Login
            </Link>
          )}
        </div>
      </motion.div>
    </motion.nav>
  );
};

export default Navbar;
