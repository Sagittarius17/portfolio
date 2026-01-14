
import { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, Sphere, MeshDistortMaterial } from '@react-three/drei';
import '../styles/hero.css';

const Hero = () => {
  return (
    <div className='hero-container container mx-auto px-4' id="home">
      <div className='hero-text'>
        <h1 className='text-8xl font-bold text-shadow-lg'>Welcome to my Portfolio</h1>
        <p className='text-2xl text-shadow-md'>I'm a passionate developer creating beautiful and functional web applications.</p>
        <a href="#projects" className='mt-8 px-8 py-3 bg-indigo-600 text-white font-bold rounded-lg shadow-lg hover:bg-indigo-700 transition-colors duration-300'>View My Work</a>
      </div>
      <div className='hero-animation'>
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
