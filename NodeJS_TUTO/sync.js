var fd=require('fs');
var text = fd.readFile('text.txt',{encoding:'utf8'});
console.log(text);