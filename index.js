const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io').listen(server);

app.use(express.static('client'));

server.listen(3000, () => {
  console.log('listening on port 3000....');
});

io.on('connection', socket => {
  console.log('a user connected');
});
