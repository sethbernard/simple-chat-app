const socket = io.connect('http://localhost:3000');

const input = document.getElementById('message-input');
const button = document.getElementById('send-button');
let output = document.getElementById('message-output');

const sendText = () => {
  socket.emit('chat', input.value);
  return false;
};

button.addEventListener('click', sendText);

socket.on('chat', msg => {
  output.innerHTML += '<p>' + msg + '</p>';
  input.value = '';
});
