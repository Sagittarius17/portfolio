import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';

const Hero = () => {
  const handleScroll = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="h-screen flex justify-between items-center container mx-auto px-4" id="home">
      <div className="flex-1">
        <h1 className="text-8xl font-bold text-shadow-lg dark:text-white">Welcome to my Portfolio</h1>
        <p className="text-2xl text-shadow-md dark:text-gray-300">I'm a passionate developer creating beautiful and functional web applications.</p>
        <button onClick={() => handleScroll('projects')} className="mt-10 inline-block px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300">View My Work</button>
      </div>
      <div className="flex-1 h-full">
        <Canvas>
          <Suspense fallback={null}>
            <OrbitControls enableZoom={false} />
            <ambientLight intensity={1} />
            <directionalLight position={[3, 2, 1]} />
            <Sphere args={[1, 100, 200]} scale={1.5}>
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
