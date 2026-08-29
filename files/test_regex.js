const html = '<label>A</label> <label>B</label> <input id="C">';
const regex = /<label(?! [^>]*for=)[^>]*>([\s\S]*?)<\/label>\s*(?:<[^>]+>\s*)*<(input|select|textarea)([^>]+)id="([^"]+)"/gi;
const res = html.replace(regex, (match, text, tag, attrs, id) => {
  console.log({match, text, tag, attrs, id});
  const sub = match.substring(match.indexOf('</label>') + 8);
  console.log("Substring:", sub);
  return `<label for="${id}">${text}</label>` + sub;
});
console.log("Result:", res);
