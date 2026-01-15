import { Suspense, useState, useEffect, useContext } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import { ThemeContext } from '../context/ThemeContext';

const Hero = () => {
  const { theme } = useContext(ThemeContext);
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 768px)');
    setIsSmallScreen(mediaQuery.matches);
    const handleMediaQueryChange = (event) => {
      setIsSmallScreen(event.matches);
    };
    mediaQuery.addEventListener('change', handleMediaQueryChange);
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange);
    };
  }, []);

  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row justify-center items-center container mx-auto px-4 pt-24 md:pt-0" id="home">
      <div className="flex-1 text-center md:text-left">
        <h1 className={`text-5xl md:text-8xl font-bold ${theme === 'dark' ? 'text-white' : 'text-black'}`}>Welcome to my Portfolio</h1>
        <p className={`text-xl md:text-2xl ${theme === 'dark' ? 'text-gray-300' : 'text-gray-700'} mt-4`}>I'm a passionate developer creating beautiful and functional web applications.</p>
        <button onClick={() => handleScroll('projects')} className="mt-10 inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300">View My Work</button>
      </div>
      <div className="flex-1 h-[500px] w-full mt-8 md:mt-0">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={isSmallScreen ? 2 : 2.5}>
              <MeshDistortMaterial
                color='#8e44ad'
                attach='material'
                distort={0.5}
                speed={2}
              />
            </Sphere>
          </Suspense>
        </Canvas>
      </div>
    </div>
  );
};

export default Hero;
