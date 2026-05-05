const fs = require('fs');

const content = fs.readFileSync('index.html', 'utf8');
const regex = /[\x00-\x08\x0B\x0C\x0E-\x1F\x7F-\x9F]/g;
let match;
let count = 0;

while ((match = regex.exec(content)) !== null) {
    console.log(`Found non-printable character ${match[0].charCodeAt(0).toString(16)} at index ${match.index}`);
    count++;
}

console.log(`Total non-printable characters found: ${count}`);
