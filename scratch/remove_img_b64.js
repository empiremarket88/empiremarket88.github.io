const fs = require('fs');

const filePath = 'index.html';
const content = fs.readFileSync(filePath, 'utf8');
const lines = content.split('\n');

const start = 2368;
const end = 2389;

if (lines[start].includes('const img_b64 =')) {
    console.log(`Removing lines ${start + 1} to ${end + 1}`);
    lines.splice(start, end - start + 1);
    fs.writeFileSync(filePath, lines.join('\n'), 'utf8');
} else {
    console.log(`Error: Line ${start + 1} is '${lines[start].trim()}', expected 'const img_b64 ='`);
    process.exit(1);
}
