const fs = require('fs');
let c = fs.readFileSync('phms.html', 'utf8');
c = c.replace(/showToast\('✅ /g, "showToast('");
c = c.replace(/showToast\('❌ /g, "showToast('");
c = c.replace(/showToast\('⚠️ /g, "showToast('");
c = c.replace(/showToast\('🗑️ /g, "showToast('");
c = c.replace(/showToast\('📦 /g, "showToast('");
fs.writeFileSync('phms.html', c);
console.log('Cleanup done');
