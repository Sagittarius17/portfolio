import { useContext } from 'react';
import { BsSun, BsFillMoonFill } from 'react-icons/bs';
import { ThemeContext } from '../context/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="fixed top-0 left-0 right-0 z-10 backdrop-blur-md bg-white/10 dark:bg-gray-800/10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <a href="#home" className="text-2xl font-bold">Shuvendu Singha</a>
          <nav>
            <ul className="flex items-center space-x-8">
              <li><a href="#home" className="hover:text-indigo-600">Home</a></li>
              <li><a href="#skills" className="hover:text-indigo-600">Skills</a></li>
              <li><a href="#projects" className="hover:text-indigo-600">Works</a></li>
              <li>
                <button onClick={toggleTheme} className="p-2 rounded-full focus:outline-none">
                  {theme === 'light' ? <BsFillMoonFill /> : <BsSun />}
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
