import { useEffect, useState } from 'react';
import { io } from 'socket.io-client';

const useGame = (roomId) => {
    const [gameState, setGameState] = useState(null);
    const [players, setPlayers] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_URL);
        setSocket(newSocket);

        newSocket.emit('joinRoom', roomId);

        newSocket.on('gameStateUpdate', (state) => {
            setGameState(state);
        });

        newSocket.on('playersUpdate', (updatedPlayers) => {
            setPlayers(updatedPlayers);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [roomId]);

    const sendGameAction = (action) => {
        if (socket) {
            socket.emit('gameAction', action);
        }
    };

    return { gameState, players, sendGameAction };
};

export default useGame;