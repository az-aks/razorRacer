import React from 'react';
import Button from './Button';

const Menu: React.FC = () => {
    return (
        <div className="menu">
            <h1>MultiRoad</h1>
            <p>Welcome to the ultimate 3D multiplayer racing experience!</p>
            <Button label="Start Game" onClick={() => {/* Logic to start the game */}} />
            <Button label="Join Room" onClick={() => {/* Logic to join a room */}} />
            <Button label="Leaderboard" onClick={() => {/* Logic to view leaderboard */}} />
        </div>
    );
};

export default Menu;