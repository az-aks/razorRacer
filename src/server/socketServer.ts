import { Server } from "socket.io";

const io = new Server(3001, {
  cors: {
    origin: "http://localhost:3000",
    methods: ["GET", "POST"],
  },
});

const rooms = {};

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("joinRoom", (roomId) => {
    socket.join(roomId);
    if (!rooms[roomId]) {
      rooms[roomId] = { players: [] };
    }
    rooms[roomId].players.push(socket.id);
    io.to(roomId).emit("updatePlayers", rooms[roomId].players);
  });

  socket.on("sendMessage", (roomId, message) => {
    io.to(roomId).emit("receiveMessage", message);
  });

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
    for (const roomId in rooms) {
      rooms[roomId].players = rooms[roomId].players.filter(
        (player) => player !== socket.id
      );
      io.to(roomId).emit("updatePlayers", rooms[roomId].players);
    }
  });
});

console.log("Socket.IO server running on port 3001");