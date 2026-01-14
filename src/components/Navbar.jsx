import { useContext, useState } from 'react';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { FaHome, FaCode, FaBriefcase, FaBars, FaTimes } from 'react-icons/fa';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/10 dark:bg-gray-800/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" onClick={() => handleScroll('home')} className="text-2xl font-bold">Shuvendu Singha</a>
          <nav className="hidden md:flex items-center">
            <ul className="flex items-center space-x-8">
              <li><button onClick={() => handleScroll('home')} className="nav-link flex items-center"><FaHome className="mr-2" />Home</button></li>
              <li><button onClick={() => handleScroll('skills')} className="nav-link flex items-center"><FaCode className="mr-2" />Skills</button></li>
              <li><button onClick={() => handleScroll('projects')} className="nav-link flex items-center"><FaBriefcase className="mr-2" />Works</button></li>
              <li>
                <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
                  {theme === 'light' ? <BsFillMoonFill /> : <BsSun />}
                </button>
              </li>
            </ul>
          </nav>
          <div className="md:hidden flex items-center">
            <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none mr-4">
              {theme === 'light' ? <BsFillMoonFill /> : <BsSun />}
            </button>
            <button onClick={() => setIsOpen(!isOpen)} className="p-2 rounded-full focus:outline-none">
              {isOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>
        {isOpen && (
          <nav className="md:hidden">
            <ul className="flex flex-col items-center space-y-4 py-4">
              <li><button onClick={() => handleScroll('home')} className="nav-link flex items-center"><FaHome className="mr-2" />Home</button></li>
              <li><button onClick={() => handleScroll('skills')} className="nav-link flex items-center"><FaCode className="mr-2" />Skills</button></li>
              <li><button onClick={() => handleScroll('projects')} className="nav-link flex items-center"><FaBriefcase className="mr-2" />Works</button></li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
};

export default Navbar;
