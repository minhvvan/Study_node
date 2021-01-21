const fs = require('fs');

const readStream = fs.createWriteStream('read.txt');
const writeStream = fs.createWriteStream('write3.txt');
readStream.pipe(writeStream);