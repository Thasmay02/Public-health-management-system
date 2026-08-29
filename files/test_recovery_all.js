const fs = require('fs');
['patient-portal.html', 'admin-portal.html'].forEach(filename => {
  let html = fs.readFileSync(filename, 'utf8');
  let changed = true;
  while (changed) {
    let nextHtml = html.replace(/([\s\S]+?<\/label>)\1/g, '$1');
    if (nextHtml === html) changed = false;
    html = nextHtml;
  }
  fs.writeFileSync(filename, html);
  console.log(`Recovered ${filename}, size: ${html.length}`);
});
