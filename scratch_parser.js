const fs = require('fs');
const html = fs.readFileSync('doctor.html', 'utf8');
const regex = /<div class="doctor-card">[\s\S]*?<img src="(.*?)" alt="(.*?)">[\s\S]*?<h3>(.*?)<\/h3>[\s\S]*?<p>(.*?)<\/p>/g;
let match;
const doctors = [];
while ((match = regex.exec(html)) !== null) {
  let name = match[3].trim();
  let id = name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
  doctors.push({
    id: id,
    name: name,
    image: match[1].trim(),
    specialization: match[4].trim(),
    qualification: 'MBBS, MD', 
    experience: '10+ Years', 
    about: `Dr. ${name.replace(/^Dr\.\s*(?:Sr\.\s*)?/, '')} is a highly dedicated and compassionate medical professional committed to providing the highest standard of patient care. With extensive experience in ${match[4].trim()}, they specialize in advanced treatments and evidence-based medical practices.`, 
    achievements: ['Gold Medalist', 'Published numerous research papers', 'Member of Medical Association']
  });
}
fs.writeFileSync('doctors.js', 'const doctorsData = ' + JSON.stringify(doctors, null, 4) + ';');
console.log('doctors.js generated with ' + doctors.length + ' doctors.');
