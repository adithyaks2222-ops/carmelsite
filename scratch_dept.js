const fs = require('fs');
let html = fs.readFileSync('department.html', 'utf8');

const regex = /<div class="dept-card">[\s\S]*?<div class="dept-icon">[\s\S]*?<i class="(.*?)"><\/i>[\s\S]*?<\/div>[\s\S]*?<h3>(.*?)<\/h3>/g;
let match;
const depts = [];

while ((match = regex.exec(html)) !== null) {
  let name = match[2].trim();
  let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let icon = match[1].trim();
  depts.push({ id, name, icon });
}

let code = `const departmentsData = [\n`;
depts.forEach(d => {
  code += `    {
        id: "${d.id}",
        name: "${d.name}",
        icon: "${d.icon}",
        image: "assets/doctor.png",
        about: "The ${d.name} department at Carmel Hospital offers comprehensive care and advanced treatments for patients. Our team of experts utilizes state-of-the-art technology to ensure the best possible outcomes.",
        treatments: [
            "Comprehensive Diagnostics",
            "Advanced Surgical Procedures",
            "Specialized Outpatient Care",
            "Rehabilitation Programs"
        ],
        facilities: [
            "24/7 Dedicated Care Unit",
            "High-Tech Operation Theaters",
            "Advanced Monitoring Systems",
            "Specialized Consultation Rooms"
        ],
        doctors: [] // Will be populated dynamically or hardcoded
    },\n`;
});
code += `];`;

fs.writeFileSync('departments.js', code);
console.log('Generated departments.js with ' + depts.length + ' departments.');
