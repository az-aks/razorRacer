import React from 'react';
import { useRouter } from 'next/router';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import World from '../../components/game/World';

const GameRoom: React.FC = () => {
  const router = useRouter();
  const { roomId } = router.query;

  return (
    <div className="game-container">
      {/* UI elements outside Canvas */}
      <div className="game-ui">
        <h2>Room: {roomId || 'Loading...'}</h2>
        <button className="btn" onClick={() => router.push('/')}>Back to menu</button>
      </div>
      
      {/* Canvas for 3D content */}
      <Canvas>
        <Physics>
          <World />
        </Physics>
      </Canvas>
    </div>
  );
};

export default GameRoom;