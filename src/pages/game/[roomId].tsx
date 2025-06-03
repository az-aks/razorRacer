import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { Canvas } from '@react-three/fiber';
import { Physics } from '@react-three/rapier';
import World from '../../components/game/World';
import { useMultiplayer } from '../../hooks/useMultiplayer';
import GameLayout from '../../components/layout/GameLayout';

const GameRoom = () => {
  const router = useRouter();
  const { roomId } = router.query;

  const { initializeRoom, cleanupRoom } = useMultiplayer();

  useEffect(() => {
    if (roomId) {
      initializeRoom(roomId);
    }
    return () => {
      cleanupRoom();
    };
  }, [roomId, initializeRoom, cleanupRoom]);

  return (
    <GameLayout>
      <Canvas>
        <Physics>
          <World />
        </Physics>
      </Canvas>
    </GameLayout>
  );
};

export default GameRoom;