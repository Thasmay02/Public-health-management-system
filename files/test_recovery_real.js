const fs = require('fs');
let html = fs.readFileSync('patient-portal.html', 'utf8');
let before = html.length;
let changed = true;
while (changed) {
  let nextHtml = html.replace(/([\s\S]+?<\/label>)\1/g, '$1');
  if (nextHtml === html) changed = false;
  html = nextHtml;
}
console.log("Original size:", before);
console.log("Recovered size:", html.length);
fs.writeFileSync('patient-portal-recovered.html', html);
