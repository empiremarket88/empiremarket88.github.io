const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

// Replace handshake followed by any whitespace-like characters with just the handshake
content = content.replace(/🤝[\s\u00A0]+/g, '🤝');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully trimmed spaces after handshake emoji.');
