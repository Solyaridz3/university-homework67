import fs from 'fs';

const writeStream = fs.createWriteStream('numbers.txt');
for (let i = 1; i <= 1000000; i++) {
    writeStream.write(`${i}\n`);
}
writeStream.end();