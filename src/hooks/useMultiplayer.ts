import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';

const useMultiplayer = (roomId: string) => {
    const [socket, setSocket] = useState<Socket | null>(null);
    const [players, setPlayers] = useState<string[]>([]);

    useEffect(() => {
        const newSocket = io(process.env.NEXT_PUBLIC_SOCKET_SERVER_URL || '', {
            query: { roomId },
        });
        setSocket(newSocket);

        newSocket.on('playersUpdate', (updatedPlayers: string[]) => {
            setPlayers(updatedPlayers);
        });

        return () => {
            newSocket.disconnect();
        };
    }, [roomId]);

    const sendMessage = (message: string) => {
        if (socket) {
            socket.emit('message', message);
        }
    };

    return { socket, players, sendMessage };
};

export default useMultiplayer;