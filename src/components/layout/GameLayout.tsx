import React from 'react';

// Make sure this doesn't have another Canvas
interface GameLayoutProps {
  children: React.ReactNode;
}

const GameLayout = ({ children }: GameLayoutProps) => {
  return <div className="game-layout">{children}</div>;
};

export default GameLayout;