import React from 'react';

const GameLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="game-layout">
            <header>
                <h1>MultiRoad</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>© 2023 MultiRoad Racing Game</p>
            </footer>
        </div>
    );
};

export default GameLayout;