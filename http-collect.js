const http = require('http');

const url = process.argv[2];

http.get(url, (response) => {
  response.setEncoding('utf8');

  let fullData = '';

  response.on('data', (chunk) => {
    fullData += chunk;
  });

  response.on('end', () => {
    console.log(fullData.length);
    console.log(fullData);
  });

  response.on('error', console.error);
}).on('error', console.error);
