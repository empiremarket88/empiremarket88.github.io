const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const replacements = [
    { from: /â€”/g, to: '—' },
    { from: /Â·/g, to: '·' },
    { from: /âŒš/g, to: '⌚' },
    { from: /ðŸ”¥/g, to: '🔥' },
    { from: /ðŸŒ¿/g, to: '🌿' },
    { from: /ðŸ’™/g, to: '💙' },
    { from: /âšª/g, to: '⚪' },
    { from: /ðŸ©µ/g, to: '🩵' },
    { from: /ðŸ”²/g, to: '🔲' },
    { from: /ðŸ”³/g, to: '🔳' },
    { from: /âœ¨/g, to: '✨' },
    { from: /ðŸ †/g, to: '🏆' },
    { from: /ðŸ‘‘/g, to: '👑' },
    { from: /ðŸ/g, to: '🟠' },
    { from: /â ±/g, to: '⏱' },
    { from: /ðŸŽ¨/g, to: '🎨' },
    { from: /ðŸ‘‹/g, to: '👋' },
    { from: /ðŸ“‹/g, to: '📋' },
    { from: /ðŸ“¦/g, to: '📦' },
    { from: /ðŸ‘¤/g, to: '👤' },
    { from: /ðŸ“±/g, to: '📱' },
    { from: /ðŸ“…/g, to: '📅' },
    { from: /ðŸ• /g, to: '🕐' },
    { from: /ðŸ“ /g, to: '📍' },
    { from: /ðŸ /g, to: '🏠' },
    { from: /âœ…/g, to: '✅' },
    { from: /ðŸ“¸/g, to: '📸' },
    { from: /ðŸ™ /g, to: '🙏' },
    { from: /â—†/g, to: '◆' },
    { from: /â˜•/g, to: '☕' },
    { from: /ðŸ“²/g, to: '📲' },
    { from: /ðŸ’¬/g, to: '💬' },
    { from: /â†’/g, to: '→' },
    { from: /â€¦/g, to: '...' },
    { from: /âš«/g, to: '⚫' },
    { from: /ðŸŸ¢/g, to: '🟢' },
    { from: /ðŸ”µ/g, to: '🔵' },
    { from: /ðŸŸ /g, to: '🟠' },
    { from: /Ã·/g, to: '÷' },
    { from: /â‰ˆ/g, to: '≈' },
    { from: /âš ï¸ /g, to: '⚠️' },
    { from: /🟠“\s*/g, to: '📍 ' },
    { from: /🟠’³/g, to: '💳' },
    { from: /🟠“²/g, to: '📱' },
    { from: /Â /g, to: ' ' },
    { from: /â˜…/g, to: '★' },
    { from: /🟠’µ/g, to: '💵' },
    { from: /🟠”’/g, to: '🛡️' },
    { from: /â”€â”€/g, to: '──' },
    { from: /📍 ¦/g, to: '📦' },
    { from: /🟠’°/g, to: '🏷️' },
    { from: /🟠¤/g, to: '🤝' },
    { from: /🟠Ž¨/g, to: '⌚' }
];

replacements.forEach(r => {
    const regex = new RegExp(r.from.source || r.from, 'g');
    content = content.replace(regex, r.to);
});

content = content.replace(/🟠“/g, '📍');

fs.writeFileSync(filePath, content, 'utf8');
console.log('Successfully cleaned up mojibake symbols from index.html (v7)');
