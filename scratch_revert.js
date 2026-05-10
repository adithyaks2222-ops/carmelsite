const fs = require('fs');
let html = fs.readFileSync('services.html', 'utf8');

// Revert the injected code
html = html.replace(/ onclick="window\.location\.href='feature-profile\.html\?id=[^']+'" style="cursor: pointer;"/g, '');

fs.writeFileSync('services.html', html);
console.log('Reverted services.html');
