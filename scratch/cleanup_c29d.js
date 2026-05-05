const fs = require('fs');

const filePath = 'index.html';
const buffer = fs.readFileSync(filePath);

// We need to work with buffers to catch specific byte sequences
// c2 9d is a common mojibake character
const target = Buffer.from([0xc2, 0x9d]);
const replacement = Buffer.from([]); // Remove it

let newBuffer = buffer;
let index = newBuffer.indexOf(target);
while (index !== -1) {
    newBuffer = Buffer.concat([
        newBuffer.slice(0, index),
        replacement,
        newBuffer.slice(index + target.length)
    ]);
    index = newBuffer.indexOf(target);
}

fs.writeFileSync(filePath, newBuffer);
console.log('Successfully removed all occurrences of the C2 9D corrupted character.');
