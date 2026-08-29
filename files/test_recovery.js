const html = '<label for="C">A</label> <label>B</label> <label>B</label> <input id="C">';
const fixed = html.replace(/([\s\S]+?<\/label>)\1/g, '$1');
console.log("Original:", html);
console.log("Fixed:   ", fixed);
