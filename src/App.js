import { useContext, useEffect } from 'react';
import Hero from './components/Hero';
import Navbar from './components/Navbar';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Footer from './components/Footer';
import { ThemeContext } from './context/ThemeContext';

function App() {
  const { theme } = useContext(ThemeContext);

  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  return (
    <div className={`font-sans bg-gray-100 dark:bg-gray-900 text-gray-900 dark:text-gray-100`}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
