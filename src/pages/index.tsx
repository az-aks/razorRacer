import React from 'react';
import Head from 'next/head';
import Menu from '../components/ui/Menu';
import { Canvas } from '@react-three/fiber';
import { Stars } from '@react-three/drei';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>MultiRoad Racing Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      
      {/* Menu UI Layer */}
      <div className="ui-layer">
        <Menu />
      </div>
      
      {/* 3D Background Layer */}
      <div className="canvas-container">
        <Canvas>
          <ambientLight intensity={0.3} />
          <pointLight position={[10, 10, 10]} />
          <Stars radius={100} depth={50} count={5000} factor={4} />
          <mesh>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="orange" />
          </mesh>
        </Canvas>
      </div>
    </>
  );
};

export default Home;