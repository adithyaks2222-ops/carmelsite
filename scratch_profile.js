const fs = require('fs');
let js = fs.readFileSync('profile.js', 'utf8');

// Add global fetchTracker
js = js.replace('let autoplayTimer;', 'let autoplayTimer;\n    let fetchTracker = 0;');

// Update Animation Out
const oldAnimOut = `        // Animation Out
        if (direction === 'right') container.classList.add('hidden-left');
        else if (direction === 'left') container.classList.add('hidden-right');
        else container.style.opacity = 0; // initial load fade`;

const newAnimOut = `        // Animation Out
        const animTargets = container.querySelectorAll('.anim-target');
        const fetchId = ++fetchTracker;
        
        animTargets.forEach(el => {
            if (direction === 'right') el.classList.add('hidden-left');
            else if (direction === 'left') el.classList.add('hidden-right');
            else el.style.opacity = 0;
        });`;

js = js.replace(oldAnimOut, newAnimOut);


// Update Animation In
const oldAnimIn = `        // Prepare for animation In
        if (direction === 'right') {
            container.classList.remove('hidden-left');
            container.classList.add('hidden-right');
        } else if (direction === 'left') {
            container.classList.remove('hidden-right');
            container.classList.add('hidden-left');
        }

        // Force reflow
        void container.offsetWidth;

        // Animation In
        container.classList.remove('hidden-left', 'hidden-right');
        container.style.opacity = 1;`;

const newAnimIn = `        if (fetchId !== fetchTracker) return; // Prevent race conditions

        // Prepare for animation In
        animTargets.forEach(el => {
            if (direction === 'right') {
                el.classList.remove('hidden-left');
                el.classList.add('hidden-right');
            } else if (direction === 'left') {
                el.classList.remove('hidden-right');
                el.classList.add('hidden-left');
            }
            
            // Force reflow
            void el.offsetWidth;
            
            // Animation In
            el.classList.remove('hidden-left', 'hidden-right');
            el.style.opacity = 1;
        });`;

js = js.replace(oldAnimIn, newAnimIn);

fs.writeFileSync('profile.js', js);
console.log('profile.js updated successfully.');
