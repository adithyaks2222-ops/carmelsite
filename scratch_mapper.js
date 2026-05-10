const fs = require('fs');

// Read files
const doctorsStr = fs.readFileSync('doctors.js', 'utf8');
const deptsStr = fs.readFileSync('departments.js', 'utf8');

// The JS files contain JS objects, not pure JSON. We will use Regex to update them.
let newDoctorsStr = doctorsStr;
let newDeptsStr = deptsStr;

// Read available images
const docImages = fs.readdirSync('assets/doctors');
const deptImages = fs.readdirSync('assets/departments');

// Doctor mapping logic
// Extract all doctors from doctors.js
const docRegex = /name:\s*"([^"]+)"/g;
let match;
while ((match = docRegex.exec(doctorsStr)) !== null) {
    const docName = match[1];
    
    // Format name to match filename (e.g., "Dr. Saji Subramanian" -> "Dr.Saji-Subramanian")
    const formattedName = docName.replace(/ /g, '-').replace(/\.-/g, '.');
    
    // Find matching image (case insensitive)
    const matchedImage = docImages.find(img => img.toLowerCase().includes(formattedName.toLowerCase()) || img.toLowerCase() === formattedName.toLowerCase() + '.jpg' || img.toLowerCase() === formattedName.toLowerCase() + '.png');
    
    if (matchedImage) {
        // Replace the image URL for this specific doctor block
        // We find the block for this doctor, then replace the image
        const blockRegex = new RegExp(`name:\\s*"${docName}"[\\s\\S]*?image:\\s*"[^"]+"`);
        const blockMatch = newDoctorsStr.match(blockRegex);
        if (blockMatch) {
            const updatedBlock = blockMatch[0].replace(/image:\s*"[^"]+"/, `image: "assets/doctors/${matchedImage}"`);
            newDoctorsStr = newDoctorsStr.replace(blockMatch[0], updatedBlock);
        }
    }
}

// Department mapping logic
const deptRegex = /name:\s*"([^"]+)"/g;
while ((match = deptRegex.exec(deptsStr)) !== null) {
    const deptName = match[1];
    
    // Clean name for matching
    const cleanName = deptName.replace(/ /g, '-');
    
    // Find matching image
    const matchedImage = deptImages.find(img => img.toLowerCase().includes(cleanName.toLowerCase()));
    
    if (matchedImage) {
        const blockRegex = new RegExp(`name:\\s*"${deptName}"[\\s\\S]*?image:\\s*"[^"]+"`);
        const blockMatch = newDeptsStr.match(blockRegex);
        if (blockMatch) {
            const updatedBlock = blockMatch[0].replace(/image:\s*"[^"]+"/, `image: "assets/departments/${matchedImage}"`);
            newDeptsStr = newDeptsStr.replace(blockMatch[0], updatedBlock);
        }
    }
}

fs.writeFileSync('doctors.js', newDoctorsStr);
fs.writeFileSync('departments.js', newDeptsStr);
console.log('Successfully updated doctors.js and departments.js with real images.');
