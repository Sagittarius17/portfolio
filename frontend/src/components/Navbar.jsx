import React, { useState } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const username = localStorage.getItem('username');

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('username');
    navigate('/');
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-900 h-[60px] text-white fixed w-full z-10 shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <ScrollLink
          to="home"
          smooth={true}
          duration={500}
          className="text-xl font-bold cursor-pointer"
        >
          MyPortfolio
        </ScrollLink>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
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
          </button>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-5 items-center">
          <Link to="/#home" smooth="true" duration={500} className="cursor-pointer hover:text-blue-400">
            Home
          </Link>
          <Link to="/#about" smooth="true" duration={500} className="cursor-pointer hover:text-blue-400">
            About
          </Link>
          <Link to="/#projects" smooth="true" duration={500} className="cursor-pointer hover:text-blue-400">
            Projects
          </Link>
          <Link to="/#contact" smooth="true" duration={500} className="cursor-pointer hover:text-blue-400">
            Contact
          </Link>

          {token ? (
            <>
              <Link to="/admin" className="hover:text-blue-400">{username || 'Admin'}</Link>
              <button onClick={handleLogout} className="text-red-400 hover:text-red-300">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-400">Login</Link>
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-4 bg-gray-800">
          <Link to="/#home" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400" onClick={toggleMenu}>
            Home
          </Link>
          <Link to="/#about" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400" onClick={toggleMenu}>
            About
          </Link>
          <Link to="/#projects" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400" onClick={toggleMenu}>
            Projects
          </Link>
          <Link to="/#contact" smooth={true} duration={500} className="cursor-pointer hover:text-blue-400" onClick={toggleMenu}>
            Contact
          </Link>
          {token ? (
            <>
              <Link to="/admin" className="hover:text-blue-400" onClick={toggleMenu}>{username || 'Admin'}</Link>
              <button onClick={() => { handleLogout(); toggleMenu(); }} className="text-red-400 hover:text-red-300">Logout</button>
            </>
          ) : (
            <Link to="/login" className="hover:text-blue-400" onClick={toggleMenu}>Login</Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
