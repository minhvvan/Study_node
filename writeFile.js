const fs = require('fs').promises;

fs.writeFile('./write.txt', 'text!!!')
    .then(() => {
        return fs.readFile('./write.txt');
    })
    .then((data) => {
        console.log(data.toString());
    })
    .catch((err) => {
        console.error(err);
    });