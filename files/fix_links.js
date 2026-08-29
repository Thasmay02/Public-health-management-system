const fs = require('fs');
const files = ['phms.html', 'patient-portal.html', 'admin-portal.html'];
files.forEach(f => {
  let content = fs.readFileSync(f, 'utf8');
  content = content.replace(/href="#" onclick="showForgotPasswordModal/g, 'href="javascript:void(0)" onclick="showForgotPasswordModal');
  fs.writeFileSync(f, content);
});
console.log('Replaced successfully.');
