import React from 'react';
import { useRouter } from 'next/router';
import Button from './Button';

const Menu: React.FC = () => {
  const router = useRouter();

  const handleStartGame = () => {
    const roomId = Math.random().toString(36).substring(2, 8);
    router.push(`/game/${roomId}`);
  };

  return (
    <div className="menu-container">
      <h1>MultiRoad Racing Game</h1>
      <div className="menu-buttons">
        <Button onClick={handleStartGame}>Start Game</Button>
        <Button onClick={() => router.push('/about')}>About</Button>
      </div>
    </div>
  );
};

export default Menu;