const fs = require('fs');

function fixHtmlFile(filename) {
  if (!fs.existsSync(filename)) return;
  let html = fs.readFileSync(filename, 'utf8');

  // First fix missing IDs
  const missingIdRegex = /<(input|select|textarea)([^>]+)>/ig;
  html = html.replace(missingIdRegex, (match, tag, attrs) => {
    if (!attrs.includes('id=') && !attrs.includes('name=')) {
      let newId = 'field_' + Math.random().toString(36).substr(2, 6);
      if (attrs.includes('filterPatients')) newId = 'searchPatientsInput';
      if (attrs.includes('filterPatientStatus')) newId = 'filterPatientStatusSelect';
      if (attrs.includes('filterApptStatus')) newId = 'filterApptStatusSelect';
      if (attrs.includes('filterDiseaseCategory')) newId = 'filterDiseaseCategorySelect';
      console.log('Fixed missing ID for:', match, '->', newId);
      return `<${tag} id="${newId}"${attrs}>`;
    }
    return match;
  });

  // Now fix labels without 'for'
  const labelRegex = /<label(?! [^>]*for=)[^>]*>([\s\S]*?)<\/label>\s*(?:<[^>]+>\s*)*<(input|select|textarea)([^>]+)id="([^"]+)"/gi;
  let count = 0;
  html = html.replace(labelRegex, (match, text, tag, attrs, id) => {
    count++;
    console.log('Fixed label for:', id);
    return `<label for="${id}">${text}</label>` + match.substring(match.indexOf('</label>') + 8);
  });

  console.log(`Total labels fixed in ${filename}:`, count);
  fs.writeFileSync(filename, html);
}

fixHtmlFile('phms.html');
fixHtmlFile('admin-portal.html');
fixHtmlFile('patient-portal.html');
