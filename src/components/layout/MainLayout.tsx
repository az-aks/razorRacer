import React from 'react';

const MainLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    return (
        <div className="main-layout">
            <header>
                <h1>MultiRoad</h1>
            </header>
            <main>{children}</main>
            <footer>
                <p>&copy; {new Date().getFullYear()} MultiRoad Racing Game</p>
            </footer>
        </div>
    );
};

export default MainLayout;