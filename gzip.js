const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./read.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./read.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream);