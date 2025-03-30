module.exports = (socket, io) => {
    socket.on('chat message', (msg) => {
        console.log('Message received:', msg);
        io.emit('chat message', msg); // Broadcast message to all connected clients
    });

    socket.on('disconnect', () => {
        console.log('User disconnected');
    });
};
