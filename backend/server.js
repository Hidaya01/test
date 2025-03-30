const express = require('express');
const http = require('http');
const { Server } = require('socket.io');
const chatRoutes = require('./routes/chatRoutes');

const app = express();
const server = http.createServer(app);

// Socket.IO setup with CORS configuration
const io = new Server(server, {
  cors: {
    origin: "http://localhost:3001", // Allow requests only from the frontend
    methods: ["GET", "POST"],        // Allowed methods
    allowedHeaders: ["Content-Type"], // Allowed headers
  }
});

// Middleware
app.use(express.json());
app.use('/api/chat', chatRoutes);

// Socket.IO connection
io.on('connection', (socket) => {
    console.log('A user connected');
    require('./socket/chatSocket')(socket, io);
});

const PORT = 3000;
server.listen(PORT, () => {
    console.log(`Chat API running on port ${PORT}`);
});
