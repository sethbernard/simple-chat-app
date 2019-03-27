const express = require('express');
const app = express();

app.use(express.static('client'));

const server = app.listen(3000, function() {
  console.log('listening on port 3000....');
});
