import React from 'react';
import Head from 'next/head';
import Menu from '../components/ui/Menu';
import { Canvas } from '@react-three/fiber';

const Home: React.FC = () => {
  return (
    <>
      <Head>
        <title>MultiRoad Racing Game</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <div>
        <h1>Menu Title</h1>
        <Canvas>
          {/* only Three.js objects here */}
        </Canvas>
      </div>
    </>
  );
};

export default Home;