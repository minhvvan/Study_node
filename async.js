const fs = require('fs');

console.log('시작');
fs.readFile('./read.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('1번', data.toString());
});
fs.readFile('./read.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('2번', data.toString());
});
fs.readFile('./read.txt', (err,data) => {
    if(err){
        throw err;
    }
    console.log('3번', data.toString());
});
console.log('끝');
