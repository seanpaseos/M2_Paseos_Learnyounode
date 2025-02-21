const fs = require('fs');
const path = require('path');

const dirPath = process.argv[2];
const extFilter = `.${process.argv[3]}`;

fs.readdir(dirPath, (err, files) => {
  if (err) {
    console.error(err);
    return;
  }
  files.forEach(file => {
    if (path.extname(file) === extFilter) {
      console.log(file);
    }
  });
});
