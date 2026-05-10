const fs = require('fs');
let html = fs.readFileSync('doctor.html', 'utf8');

const regex = /<div class="doctor-card">[\s\S]*?<h3>(.*?)<\/h3>/g;
let match;
const replacements = [];

while ((match = regex.exec(html)) !== null) {
  let name = match[1].trim();
  let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  
  let originalBlock = match[0];
  let newBlock = originalBlock.replace('<div class="doctor-card">', '<div class="doctor-card" onclick="window.location.href=\'profile.html?id=' + id + '\'" style="cursor: pointer;">');
  replacements.push({old: originalBlock, new: newBlock});
}

replacements.forEach(rep => {
    html = html.replace(rep.old, rep.new);
});

fs.writeFileSync('doctor.html', html);
console.log('doctor.html updated with clickable cards.');
