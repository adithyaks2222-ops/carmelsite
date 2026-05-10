document.addEventListener('DOMContentLoaded', () => {
    // Basic Layout Interactions
    const navbar = document.getElementById('navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) navbar.classList.add('scrolled');
        else navbar.classList.remove('scrolled');
    });

    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        hamburger.innerHTML = mobileMenu.classList.contains('active') 
            ? '<i class="fa-solid fa-xmark"></i>' 
            : '<i class="fa-solid fa-bars"></i>';
    });

    // Profile Logic
    if (typeof doctorsData === 'undefined' || doctorsData.length === 0) {
        console.error('Doctors data not loaded!');
        return;
    }

    let currentIndex = 0;
    let autoplayTimer;
    let fetchTracker = 0;
    let isHovered = false;

    // DOM Elements
    const container = document.getElementById('profile-container');
    const pImage = document.getElementById('p-image');
    const pBadgeName = document.getElementById('p-badge-name');
    const pBadgeSpec = document.getElementById('p-badge-spec');
    const pName = document.getElementById('p-name');
    const pSpec = document.getElementById('p-specialization');
    const pQual = document.getElementById('p-qualification');
    const pExp = document.getElementById('p-experience');
    const pAbout = document.getElementById('p-about');
    const thumbStrip = document.getElementById('thumbnail-strip');

    // Initialize
    initThumbnails();
    handleUrlRouting();
    startAutoplay();

    // Browser Back/Forward support
    window.addEventListener('popstate', handleUrlRouting);

    function handleUrlRouting() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        let index = doctorsData.findIndex(d => d.id === id);
        
        if (index === -1) index = 0; // Default to first if not found
        
        if (index !== currentIndex || !pImage.src) {
            loadDoctor(index, 'none'); // no slide animation on direct routing
        }
    }

    async function loadDoctor(index, direction = 'right') {
        if (index < 0) index = doctorsData.length - 1;
        if (index >= doctorsData.length) index = 0;
        
        currentIndex = index;
        const doc = doctorsData[currentIndex]; // Lightweight info

        // Update URL quietly (Wrap in try-catch to prevent file:// protocol security errors)
        try {
            const url = new URL(window.location);
            url.searchParams.set('id', doc.id);
            window.history.pushState({ id: doc.id }, '', url);
        } catch (e) {
            console.warn("History API blocked on local file protocol. Using hash or ignoring.");
        }

        // Animation Out
        const animTargets = container.querySelectorAll('.anim-target');
        const fetchId = ++fetchTracker;
        
        animTargets.forEach(el => {
            if (direction === 'right') el.classList.add('hidden-left');
            else if (direction === 'left') el.classList.add('hidden-right');
            else el.style.opacity = 0;
        });

        // Fetch Detailed TXT Data concurrently with animation
        try {
            // They named the files exactly as doc.name + ".txt"
            const response = await fetch(`assets/doctors/details/${doc.name}.txt`);
            if (response.ok) {
                const text = await response.text();
                
                // Clean up the text: remove "Profile details" block if it exists
                let aboutText = text;
                const profileIndex = aboutText.toLowerCase().indexOf('profile details');
                if (profileIndex !== -1) {
                    aboutText = aboutText.substring(0, profileIndex);
                }
                
                // Remove the doctor's name if it appears at the very top of the text
                const nameRegex = new RegExp(`^\\s*${doc.name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}\\s*`, 'i');
                aboutText = aboutText.replace(nameRegex, '');

                // Split into paragraphs
                const paragraphs = aboutText.split('\n')
                    .map(p => p.trim())
                    .filter(p => p.length > 0);

                pAbout.innerHTML = paragraphs.map(p => `<p>${p}</p>`).join('');
            } else {
                console.warn(`Failed to fetch details for ${doc.name}`);
                // Fallback to doctors.js
                pAbout.innerHTML = Array.isArray(doc.about) 
                    ? doc.about.map(para => `<p>${para}</p>`).join('') 
                    : `<p>${doc.about || ""}</p>`;
            }
        } catch (e) {
            console.error('Error fetching doctor details:', e);
            // Fallback
            pAbout.innerHTML = Array.isArray(doc.about) 
                ? doc.about.map(para => `<p>${para}</p>`).join('') 
                : `<p>${doc.about || ""}</p>`;
        }

        // Wait for CSS transition (0.4s) if fetch was faster
        await new Promise(resolve => setTimeout(resolve, 400));

        // Update Content
        pImage.src = doc.image;
        pImage.alt = doc.name;
        pBadgeName.textContent = doc.name;
        pBadgeSpec.textContent = doc.specialization;
        
        pName.textContent = doc.name;
        pSpec.textContent = doc.specialization;
        
        // Since we are not using the JSON anymore, use the data from doctors.js
        pQual.textContent = doc.qualification || "";
        pExp.textContent = doc.experience || "";

        updateThumbnails();

        if (fetchId !== fetchTracker) return; // Prevent race conditions

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
        });
    }

    function nextDoctor() {
        loadDoctor(currentIndex + 1, 'right');
        resetAutoplay();
    }

    function prevDoctor() {
        loadDoctor(currentIndex - 1, 'left');
        resetAutoplay();
    }

    // Controls
    document.getElementById('next-profile').addEventListener('click', nextDoctor);
    document.getElementById('prev-profile').addEventListener('click', prevDoctor);

    // Thumbnails
    function initThumbnails() {
        doctorsData.forEach((doc, idx) => {
            const thumb = document.createElement('div');
            thumb.className = 'thumb-card';
            thumb.innerHTML = `<img src="${doc.image}" alt="${doc.name}" title="${doc.name}">`;
            thumb.addEventListener('click', () => {
                if (currentIndex !== idx) {
                    const direction = idx > currentIndex ? 'right' : 'left';
                    loadDoctor(idx, direction);
                    resetAutoplay();
                }
            });
            thumbStrip.appendChild(thumb);
        });
    }

    function updateThumbnails() {
        const thumbs = thumbStrip.querySelectorAll('.thumb-card');
        thumbs.forEach((t, idx) => {
            if (idx === currentIndex) {
                t.classList.add('active');
                
                // Calculate scroll position to center the thumbnail horizontally without affecting vertical page scroll
                const scrollLeft = t.offsetLeft - (thumbStrip.clientWidth / 2) + (t.clientWidth / 2);
                
                // Scroll the thumbnail wrapper horizontally
                const wrapper = document.querySelector('.profile-thumbnails-wrapper');
                if (wrapper) {
                    wrapper.scrollTo({ left: scrollLeft, behavior: 'smooth' });
                }
                
            } else {
                t.classList.remove('active');
            }
        });
    }

    // Autoplay Logic
    function startAutoplay() {
        autoplayTimer = setInterval(() => {
            if (!isHovered) {
                loadDoctor(currentIndex + 1, 'right');
            }
        }, 5000); // 5 seconds
    }

    function resetAutoplay() {
        clearInterval(autoplayTimer);
        startAutoplay();
    }

    container.addEventListener('mouseenter', () => isHovered = true);
    container.addEventListener('mouseleave', () => isHovered = false);

    // Touch Swipe Logic
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
        isHovered = true; // Pause on touch
    }, {passive: true});

    container.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        isHovered = false;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextDoctor(); // Swiped left
        }
        if (touchEndX > touchStartX + threshold) {
            prevDoctor(); // Swiped right
        }
    }
});
