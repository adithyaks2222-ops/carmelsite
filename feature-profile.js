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
    if (typeof featuresData === 'undefined' || typeof doctorsData === 'undefined') {
        console.error('Data not loaded!');
        return;
    }

    let currentIndex = 0;
    const container = document.getElementById('feature-container');
    const fBanner = document.getElementById('f-banner');
    const fIcon = document.getElementById('f-icon');
    const fTitle = document.getElementById('f-title');
    const fAbout = document.getElementById('f-about');
    const fFacilities = document.getElementById('f-facilities');
    const fTreatments = document.getElementById('f-treatments');
    const fStats = document.getElementById('f-stats');
    const fGallery = document.getElementById('f-gallery');
    const fDoctors = document.getElementById('f-doctors');

    // Initialize
    handleUrlRouting();
    window.addEventListener('popstate', handleUrlRouting);

    function handleUrlRouting() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        let index = featuresData.findIndex(f => f.id === id);
        
        if (index === -1) index = 0; // Default to first if not found
        
        loadFeature(index, 'none'); 
    }

    function loadFeature(index) {
        if (index < 0) index = featuresData.length - 1;
        if (index >= featuresData.length) index = 0;
        
        currentIndex = index;
        const feature = featuresData[currentIndex];

        // Update URL quietly
        try {
            const url = new URL(window.location);
            url.searchParams.set('id', feature.id);
            window.history.pushState({ id: feature.id }, '', url);
        } catch (e) {
            console.warn("History API blocked on local file protocol.");
        }

        // Animation Out
        container.classList.add('hidden');

        setTimeout(() => {
            // Update Content
            if(fBanner && feature.image) {
                fBanner.style.backgroundImage = `linear-gradient(135deg, rgba(0, 191, 165, 0.85), rgba(13, 71, 161, 0.9)), url('${feature.image}')`;
            }
            fIcon.className = `feature-banner-icon ${feature.icon}`;
            fTitle.textContent = feature.title;
            fAbout.textContent = feature.about;

            fFacilities.innerHTML = feature.facilities.map(f => 
                `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`
            ).join('');

            fTreatments.innerHTML = feature.treatments.map(t => 
                `<li><i class="fa-solid fa-notes-medical"></i> ${t}</li>`
            ).join('');

            fStats.innerHTML = feature.stats.map(s => 
                `<div class="stat-box">
                    <div class="stat-value">${s.value}</div>
                    <div class="stat-label">${s.label}</div>
                </div>`
            ).join('');

            fGallery.innerHTML = feature.gallery.map(img => 
                `<div class="gallery-img-wrapper">
                    <img src="${img}" alt="Gallery Preview">
                </div>`
            ).join('');

            // Filter Doctors
            const titleLower = feature.title.toLowerCase();
            let matchedDoctors = doctorsData.filter(doc => {
                const spec = doc.specialization.toLowerCase();
                return spec.includes(titleLower) || titleLower.includes(spec) || 
                       (titleLower.includes('medical') && spec.includes('physician')) ||
                       (titleLower.includes('emergency') && spec.includes('physician'));
            });

            // If no doctors found, provide random top-tier placeholders
            if (matchedDoctors.length === 0) {
                // Find doctors with "Chief" or default to top 2
                matchedDoctors = doctorsData.filter(d => d.specialization.toLowerCase().includes('chief')).slice(0,2);
                if(matchedDoctors.length === 0) {
                    matchedDoctors = [doctorsData[0], doctorsData[1]];
                }
            }

            fDoctors.innerHTML = matchedDoctors.map(doc => `
                <div class="doctor-card" onclick="window.location.href='profile.html?id=${doc.id}'" style="cursor: pointer;">
                    <div class="doc-img-wrapper">
                        <img src="${doc.image}" alt="${doc.name}">
                    </div>
                    <div class="doc-info">
                        <h3>${doc.name}</h3>
                        <p>${doc.specialization}</p>
                    </div>
                </div>
            `).join('');

            // Force reflow
            void container.offsetWidth;

            // Animation In
            container.classList.remove('hidden');

            // Scroll to top
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }, 500); // Wait for CSS transition (0.5s)
    }

    function nextFeature() {
        loadFeature(currentIndex + 1);
    }

    function prevFeature() {
        loadFeature(currentIndex - 1);
    }

    // Controls
    document.getElementById('next-feature').addEventListener('click', nextFeature);
    document.getElementById('prev-feature').addEventListener('click', prevFeature);

    // Touch Swipe Logic
    let touchStartX = 0;
    let touchEndX = 0;

    container.addEventListener('touchstart', e => {
        touchStartX = e.changedTouches[0].screenX;
    }, {passive: true});

    container.addEventListener('touchend', e => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
    });

    function handleSwipe() {
        const threshold = 50;
        if (touchEndX < touchStartX - threshold) {
            nextFeature(); // Swiped left
        }
        if (touchEndX > touchStartX + threshold) {
            prevFeature(); // Swiped right
        }
    }
});
