const fs = require('fs');

const filePath = 'index.html';
const content = fs.readFileSync(filePath, 'utf8');

// Remove characters in the ranges specified (non-printable control characters)
// This targets the 008D and similar sequences
const cleanedContent = content.replace(/[\x7F-\x9F]/g, '');

fs.writeFileSync(filePath, cleanedContent, 'utf8');
console.log('Successfully removed all remaining hidden control characters.');
