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
    if (typeof departmentsData === 'undefined' || typeof doctorsData === 'undefined') {
        console.error('Data not loaded!');
        return;
    }

    let currentIndex = 0;
    const container = document.getElementById('dept-container');
    const dBanner = document.getElementById('d-banner');
    const dIcon = document.getElementById('d-icon');
    const dName = document.getElementById('d-name');
    const dAbout = document.getElementById('d-about');
    const dTreatments = document.getElementById('d-treatments');
    const dFacilities = document.getElementById('d-facilities');
    const dDoctors = document.getElementById('d-doctors');

    // Initialize
    handleUrlRouting();
    window.addEventListener('popstate', handleUrlRouting);

    function handleUrlRouting() {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        let index = departmentsData.findIndex(d => d.id === id);
        
        if (index === -1) index = 0; // Default to first if not found
        
        loadDepartment(index, 'none'); // no animation on direct routing
    }

    function loadDepartment(index) {
        if (index < 0) index = departmentsData.length - 1;
        if (index >= departmentsData.length) index = 0;
        
        currentIndex = index;
        const dept = departmentsData[currentIndex];

        // Update URL quietly
        try {
            const url = new URL(window.location);
            url.searchParams.set('id', dept.id);
            window.history.pushState({ id: dept.id }, '', url);
        } catch (e) {
            console.warn("History API blocked on local file protocol.");
        }

        // Animation Out
        container.classList.add('hidden');

        setTimeout(() => {
            // Update Content
            if(dBanner && dept.image) {
                dBanner.style.backgroundImage = `linear-gradient(135deg, rgba(13, 71, 161, 0.8), rgba(0, 191, 165, 0.8)), url('${dept.image}')`;
            }
            dIcon.className = `dept-banner-icon ${dept.icon}`;
            dName.textContent = dept.name;
            dAbout.textContent = dept.about;

            dTreatments.innerHTML = dept.treatments.map(t => 
                `<li><i class="fa-solid fa-check"></i> ${t}</li>`
            ).join('');

            dFacilities.innerHTML = dept.facilities.map(f => 
                `<li><i class="fa-solid fa-circle-check"></i> ${f}</li>`
            ).join('');

            // Smart Doctor Matching Logic
            const deptNameLower = dept.name.toLowerCase();
            
            // Map departments to their corresponding doctor specializations
            const specMap = {
                'gynaecology': ['gynecologist', 'gynaecologist'],
                'paediatrics': ['pediatrician', 'paediatrician'],
                'orthopaedics': ['orthopedic', 'orthopaedic'],
                'cardiology': ['cardiologist'],
                'ent': ['ent'],
                'anaesthesia': ['anesthesiologist', 'anaesthesiologist'],
                'clinical psychology': ['psychologist'],
                'dental': ['dental', 'orthodontist', 'dentist'],
                'ophthalmology': ['ophthalmologist'],
                'dermatology': ['dermatologist'],
                'psychiatry': ['psychiatrist'],
                'general surgery': ['surgery', 'surgeon'],
                'laparoscopic surgery': ['laparoscopic surgeon', 'surgeon'],
                'general medicine': ['physician', 'general medicine'],
                'emergency medicine': ['cmo', 'rmo', 'physician', 'emergency'],
                'nephrology': ['nephrologist']
            };

            let matchedDoctors = doctorsData.filter(doc => {
                const spec = doc.specialization.toLowerCase();
                
                // 1. Direct String Match
                if (spec.includes(deptNameLower) || deptNameLower.includes(spec)) return true;
                
                // 2. Map-based matching
                const keywords = specMap[deptNameLower] || [];
                return keywords.some(keyword => spec.includes(keyword));
            });

            // If no doctors found, provide 2 random placeholders for UI completeness
            if (matchedDoctors.length === 0) {
                matchedDoctors = [doctorsData[0], doctorsData[1]];
            }

            dDoctors.innerHTML = matchedDoctors.map(doc => `
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

            // Scroll to top of department section
            window.scrollTo({ top: 0, behavior: 'smooth' });

        }, 500); // Wait for CSS transition (0.5s)
    }

    function nextDept() {
        loadDepartment(currentIndex + 1);
    }

    function prevDept() {
        loadDepartment(currentIndex - 1);
    }

    // Controls
    document.getElementById('next-dept').addEventListener('click', nextDept);
    document.getElementById('prev-dept').addEventListener('click', prevDept);

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
            nextDept(); // Swiped left
        }
        if (touchEndX > touchStartX + threshold) {
            prevDept(); // Swiped right
        }
    }
});
