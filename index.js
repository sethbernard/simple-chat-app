const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

server.listen(3000, () => {
  console.log('listening on port 3000....');
});

app.use(express.static('client'));

io.on('connection', socket => {
  console.log('A user connected with the id: ', socket.id);
  socket.on('chat', msg => {
    io.emit('chat', msg);
  });
});
