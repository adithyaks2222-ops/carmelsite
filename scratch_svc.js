const fs = require('fs');
let html = fs.readFileSync('services.html', 'utf8');

const regex = /<div class="service-card">[\s\S]*?<div class="service-icon">[\s\S]*?<i class="(.*?)"><\/i>[\s\S]*?<\/div>[\s\S]*?<h3>(.*?)<\/h3>/g;
let match;
const services = [];

while ((match = regex.exec(html)) !== null) {
  let name = match[2].trim();
  let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  let icon = match[1].trim();
  services.push({ id, name, icon });
}

let code = `const featuresData = [\n`;
services.forEach(s => {
  code += `    {
        id: "${s.id}",
        title: "${s.name}",
        icon: "${s.icon}",
        image: "assets/doctor.png", // Placeholder
        about: "The ${s.name} service at Carmel Hospital provides unparalleled dedication and advanced methodologies to ensure maximum patient safety and recovery. Our specialized approach has led to award-winning care.",
        facilities: [
            "State-of-the-art Equipment",
            "24/7 Monitoring Systems",
            "Dedicated Specialist Teams",
            "Advanced Diagnostic Integration"
        ],
        treatments: [
            "Comprehensive Evaluation",
            "Targeted Therapeutic Intervention",
            "Continuous Patient Support",
            "Post-care Rehabilitation"
        ],
        relatedDepartments: ["Emergency", "General Medicine"],
        stats: [
            { value: "10k+", label: "Patients Treated" },
            { value: "24/7", label: "Availability" },
            { value: "99%", label: "Success Rate" }
        ],
        gallery: ["assets/doctor.png", "assets/doctor.png", "assets/doctor.png"] // Placeholders
    },\n`;
});
code += `];`;

fs.writeFileSync('features.js', code);
console.log('Generated features.js with ' + services.length + ' services.');
