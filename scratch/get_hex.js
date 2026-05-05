const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const lines = content.split('\n');
const line = lines[1952];

console.log('Line content:', line);
console.log('Hex representation:');
const buffer = Buffer.from(line, 'utf8');
let hex = '';
for (const b of buffer) {
    hex += b.toString(16).padStart(2, '0') + ' ';
}
console.log(hex);
