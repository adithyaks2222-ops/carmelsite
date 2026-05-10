document.addEventListener('DOMContentLoaded', () => {
    // 1. Liquid Glass Navbar Effect & Sticky
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // 2. Mobile Menu Toggle
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = mobileMenu.querySelectorAll('a');

    hamburger.addEventListener('click', () => {
        mobileMenu.classList.toggle('active');
        if (mobileMenu.classList.contains('active')) {
            hamburger.innerHTML = '<i class="fa-solid fa-xmark"></i>';
        } else {
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        }
    });

    mobileLinks.forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            hamburger.innerHTML = '<i class="fa-solid fa-bars"></i>';
        });
    });

    // 3. Smooth Scroll Animations using Intersection Observer
    const animateElements = document.querySelectorAll('.fade-up, .fade-in-left, .fade-in-right');
    
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.15
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animateElements.forEach(el => {
        observer.observe(el);
    });

    // 4. Dynamic Doctor Carousel with Infinite Marquee & Touch
    const track = document.getElementById('doctor-track');
    const prevBtn = document.getElementById('prev-doc');
    const nextBtn = document.getElementById('next-doc');
    
    if (track && prevBtn && nextBtn) {
        let isHovered = false;
        let isDragging = false;
        let startX = 0;
        let currentTranslate = 0;
        let prevTranslate = 0;
        let speed = 1.0; 
        let jumpOffset = 0; 
        
        let originalCardsCount = 0;
        let cardWidthWithGap = 0;
        let totalOriginalWidth = 0;

        async function loadDoctors() {
            try {
                if (typeof doctorsData === 'undefined') {
                    console.error('doctorsData not found!');
                    return;
                }
                
                originalCardsCount = doctorsData.length;
                if (originalCardsCount === 0) return;
                
                track.innerHTML = ''; 
                
                // Create card elements from doctorsData
                const cardsHTML = doctorsData.map(doc => `
                    <div class="doctor-card" onclick="window.location.href='profile.html?id=${doc.id}'" style="cursor: pointer;">
                        <div class="doc-img-wrapper">
                            <img src="${doc.image}" alt="${doc.name}" draggable="false">
                        </div>
                        <div class="doc-info">
                            <h3>${doc.name}</h3>
                            <p>${doc.specialization}</p>
                        </div>
                    </div>
                `).join('');

                // Clone 3 sets for a seamless infinite buffer
                track.innerHTML = cardsHTML + cardsHTML + cardsHTML;

                setTimeout(() => {
                    const firstCard = track.querySelector('.doctor-card');
                    if(firstCard) {
                        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
                        cardWidthWithGap = firstCard.offsetWidth + gap;
                        totalOriginalWidth = cardWidthWithGap * originalCardsCount;
                        
                        // Start precisely at the beginning of Set 1
                        currentTranslate = -totalOriginalWidth;
                        
                        requestAnimationFrame(animate);
                    }
                }, 100);

            } catch (error) {
                console.error('Error loading doctors:', error);
            }
        }

        function animate() {
            if (!isDragging) {
                if (Math.abs(jumpOffset) > 0.5) {
                    let step = jumpOffset * 0.1;
                    currentTranslate -= step;
                    jumpOffset -= step;
                } else if (!isHovered) {
                    currentTranslate -= speed;
                }
            }

            // Wrap bounds: Keep currentTranslate between -totalOriginalWidth and -(totalOriginalWidth * 2)
            if (currentTranslate <= -(totalOriginalWidth * 2)) {
                currentTranslate += totalOriginalWidth;
            } else if (currentTranslate > -totalOriginalWidth) {
                currentTranslate -= totalOriginalWidth;
            }

            track.style.transform = `translateX(${currentTranslate}px)`;
            requestAnimationFrame(animate);
        }

        // Hover pause
        track.parentElement.addEventListener('mouseenter', () => isHovered = true);
        track.parentElement.addEventListener('mouseleave', () => isHovered = false);

        // Arrows (Right arrow = move left (-), Left arrow = move right (+))
        nextBtn.addEventListener('click', () => {
            jumpOffset += cardWidthWithGap; 
        });

        prevBtn.addEventListener('click', () => {
            jumpOffset -= cardWidthWithGap;
        });

        // Touch/Mouse Swipe
        track.addEventListener('touchstart', touchStart, {passive: true});
        track.addEventListener('touchmove', touchMove, {passive: true});
        track.addEventListener('touchend', touchEnd);
        
        track.addEventListener('mousedown', touchStart);
        window.addEventListener('mousemove', touchMove);
        window.addEventListener('mouseup', touchEnd);

        function getPositionX(event) {
            return event.type.includes('mouse') ? event.pageX : event.touches[0].clientX;
        }

        function touchStart(event) {
            isDragging = true;
            startX = getPositionX(event);
            prevTranslate = currentTranslate;
            track.style.cursor = 'grabbing';
            jumpOffset = 0; 
        }

        function touchMove(event) {
            if (!isDragging) return;
            const currentPosition = getPositionX(event);
            const diff = currentPosition - startX;
            currentTranslate = prevTranslate + diff;
        }

        function touchEnd() {
            isDragging = false;
            track.style.cursor = 'grab';
        }

        window.addEventListener('resize', () => {
            const firstCard = track.querySelector('.doctor-card');
            if(firstCard) {
                const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
                cardWidthWithGap = firstCard.offsetWidth + gap;
                totalOriginalWidth = cardWidthWithGap * originalCardsCount;
            }
        });

        loadDoctors();
    }
});
