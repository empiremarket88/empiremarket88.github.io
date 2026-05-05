const fs = require('fs');

const filePath = 'index.html';
let content = fs.readFileSync(filePath, 'utf8');

const startMarker = "      // Model mapping untuk kegunaan sistem";
const endMarker = "      }\n    };";

// Try a more flexible approach to find the block
const productsMatch = content.match(/products: \{[\s\S]*?\n\s+\}/);

if (productsMatch) {
    const newProducts = `products: {
        'prxblack':   { name: 'Tissot PRX 40mm', subName: 'Hitam / Black', desc: 'Black Dial · Steel Bracelet', pKey: 'prx', img1: 'prxblack', flag: '🔥 Paling Laris', flagStyle: 'background:var(--red);color:#fff', isActive: 1 },
        'prxgreen':   { name: 'Tissot PRX 40mm', subName: 'Hijau / Green', desc: 'Green Dial · Steel Bracelet', pKey: 'prx', img1: 'prxgreen', flag: '🌿 Hijau', flagStyle: 'background:var(--hijau);color:var(--emas2)', isActive: 1 },
        'prxdkblue':  { name: 'Tissot PRX 40mm', subName: 'Biru Gelap / Dark Blue', desc: 'Dark Blue Dial · Steel Bracelet', pKey: 'prx', img1: 'prxdkblue', flag: '💙 Biru Gelap', flagStyle: 'background:var(--hijau);color:var(--emas2)', isActive: 1 },
        'prxsilver':  { name: 'Tissot PRX 40mm', subName: 'Silver / Perak', desc: 'Silver Dial · Steel Bracelet', pKey: 'prx', img1: 'prxsilver', flag: '⚪ Silver', flagStyle: 'background:var(--hijau);color:var(--emas2)', isActive: 1 },
        'prxtiffany': { name: 'Tissot PRX 40mm', subName: 'Tiffany Blue', desc: 'Tiffany Blue Dial · Steel Bracelet', pKey: 'prx', img1: 'prxtiffany', flag: '🩵 Tiffany Blue', flagStyle: 'background:#0abfbc;color:#fff', isActive: 1 },
        'prxwdkblue': { name: 'Tissot PRX 40mm', subName: 'Waffle Dark Blue', desc: 'Waffle Dark Blue Dial · Steel Bracelet', pKey: 'prx', img1: 'prxwdkblue', flag: '🔲 Waffle Biru', flagStyle: 'background:var(--hijau);color:var(--emas2)', isActive: 1 },
        'prxwwhite':  { name: 'Tissot PRX 40mm', subName: 'Waffle White', desc: 'Waffle White Dial · Steel Bracelet', pKey: 'prx', img1: 'prxwwhite', flag: '🔳 Waffle Putih', flagStyle: 'background:var(--hijau);color:var(--emas2)', isActive: 1 },
        'prxlume':    { name: 'Tissot PRX 40mm', subName: 'White Lume', desc: 'White Lume Dial · Steel Bracelet', pKey: 'lume', img1: 'prxlume1', img2: 'prxlume2', flag: '✨ Lume Edisi Khas', flagStyle: 'background:var(--emas);color:var(--hijau)', isActive: 1 },
        'lelode':     { name: 'Tissot Le Lode', subName: 'Powermatic 80', desc: 'Silver Dial · Leather Strap', pKey: 'lelode', img1: 'lelode1', img2: 'lelode2', flag: '🏆 Klasik', flagStyle: 'background:var(--emas);color:var(--hijau)', isActive: 1 },
        'rolexdj':    { name: 'Rolex Datejust', subName: 'Silver', desc: 'Silver Dial · Jubilee Bracelet', pKey: 'rolexdj', img1: 'rolexdj1', img2: 'rolexdj2', flag: '👑 Premium', flagStyle: 'background:#1a1a1a;color:#e8c97a', isActive: 1 },
        'rolexgmt':   { name: 'Rolex GMT Master II', subName: 'Black', desc: 'Black Dial · Jubilee Bracelet', pKey: 'rolexgmt', img1: 'rolexgmt1', img2: 'rolexgmt2', flag: '👑 Ekslusif', flagStyle: 'background:#1a1a1a;color:#e8c97a', isActive: 1 },
        'seikoorg':   { name: 'Seiko Presage', subName: 'Cream / Orange', desc: 'Cream Dial · Leather Strap', pKey: 'seikoorg', img1: 'seikoorg', flag: '🟠 Seiko', flagStyle: 'background:#c04a00;color:#fff', isActive: 1 },
        'seikosil':   { name: 'Seiko Chronograph', subName: 'Silver', desc: 'Silver Dial · Steel Bracelet', pKey: 'seikosil', img1: 'seikosil1', img2: 'seikosil2', flag: '⏱ Kronograf', flagStyle: 'background:#c04a00;color:#fff', isActive: 0 },
        'leather':    { name: 'Tali Kulit 22mm', subName: 'Pelbagai Warna', desc: 'Crocodile Grain · Silver Buckle', pKey: 'leather', img1: 'leather1', img2: 'leather2', flag: '🎨 Aksesori', flagStyle: 'background:var(--coklat);color:var(--emas-pale)', isActive: 1 }
      }`;
    
    content = content.replace(productsMatch[0], newProducts);
    fs.writeFileSync(filePath, content, 'utf8');
    console.log('Successfully updated KRONOS_CONFIG products with regex.');
} else {
    console.log('Error: Could not find products block with regex.');
    process.exit(1);
}
