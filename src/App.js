import './App.css';
import './styles/global.css';
import { useContext } from 'react';
import { Navbar, Footer } from './components';
import Hero from './components/Hero';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import { ThemeContext } from './context/ThemeContext';

const App = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className={`App ${theme}`}>
      <Navbar />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App
