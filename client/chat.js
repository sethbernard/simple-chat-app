const socket = io.connect('http://localhost:3000');

const input = document.getElementById('message-input');
const button = document.getElementById('send-button');
let output = document.getElementById('message-output');

const sendText = () => {
  socket.emit('chat', input.value);
  output.innerHTML += '<p>' + input.value + '</p>';
  input.value = '';
  return false;
};

button.addEventListener('click', sendText);
