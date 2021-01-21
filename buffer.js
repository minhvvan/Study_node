const buffer = Buffer.from('버퍼로 바꾸기');
console.log('from(): ', buffer);
console.log('length: ', buffer.length);
console.log('from(): ', buffer.toString());

const array = [Buffer.from('띄엄 '), Buffer.from('띄엄 '), Buffer.from('띄어쓰기')];

const buffer2 = Buffer.concat(array);
console.log('concat(): ', buffer2.toString());

const buffer3 = Buffer.alloc(5);
console.log('alloc(): ', buffer3);
