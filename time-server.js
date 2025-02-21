const net = require('net');

function zeroFill(num) {
  return num < 10 ? '0' + num : num;
}

const server = net.createServer((socket) => {
  const now = new Date();

  const formattedDate = `${now.getFullYear()}-${zeroFill(now.getMonth() + 1)}-${zeroFill(now.getDate())} ${zeroFill(now.getHours())}:${zeroFill(now.getMinutes())}`;

  socket.end(formattedDate + '\n'); 
});

server.listen(Number(process.argv[2]));
