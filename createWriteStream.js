const fs = require('fs');

const writeStream = fs.createWriteStream('./write2.txt');
writeStream.on('finish', () =>{
    console.log('파일 쓰기 완료');
});

writeStream.write('글을 쓴다.\n');
writeStream.write('글을 쓴다.\n');
writeStream.end();