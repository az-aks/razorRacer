import React from 'react';

const Leaderboard = ({ players }) => {
    return (
        <div className="leaderboard">
            <h2>Leaderboard</h2>
            <ul>
                {players.map((player, index) => (
                    <li key={index}>
                        {index + 1}. {player.name} - {player.score} points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Leaderboard;