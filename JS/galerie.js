document.addEventListener('DOMContentLoaded', () => {

    // --- GALERIE-LOGIK ---

    const backgroundImages = document.querySelectorAll('.background-image');
    
    const prevBtn = document.getElementById('prev-btn');
    const nextBtn = document.getElementById('next-btn');
    const counter = document.getElementById('counter');
    const progressIndicator = document.querySelector('.progress-indicator');

    const totalSlides = backgroundImages.length;
    let currentIndex = 0;
    
    let isScrolling = false; 

    for (let i = 0; i < totalSlides; i++) {
        const bar = document.createElement('div');
        bar.classList.add('progress-bar');
        progressIndicator.appendChild(bar);
    }
    const progressBars = document.querySelectorAll('.progress-bar');

    function updateGallery(newIndex) {
        backgroundImages[currentIndex].classList.remove('active');
        currentIndex = newIndex;
        backgroundImages[currentIndex].classList.add('active');
        counter.textContent = `${currentIndex + 1} / ${totalSlides}`;
        progressBars.forEach((bar, index) => {
            bar.classList.toggle('active', index === currentIndex);
        });
    }

    function showNextSlide() {
        const newIndex = (currentIndex + 1) % totalSlides;
        updateGallery(newIndex);
    }

    function showPrevSlide() {
        const newIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateGallery(newIndex);
    }

    nextBtn.addEventListener('click', showNextSlide);
    prevBtn.addEventListener('click', showPrevSlide);
    
    window.addEventListener('wheel', (event) => {
        if (document.body.classList.contains('menu-open')) return; // Wenn Menü offen, nicht scrollen
        if (isScrolling) return;

        if (event.deltaY > 0) {
            showNextSlide();
        } else if (event.deltaY < 0) {
            showPrevSlide();
        }

        isScrolling = true;
        setTimeout(() => {
            isScrolling = false;
        }, 1000); 
    });

    if(backgroundImages.length > 0) {
        updateGallery(0);
    }


    // --- NEU: HAMBURGER-MENÜ-LOGIK ---

    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');

    menuToggle.addEventListener('click', () => {
        // Fügt/entfernt die 'menu-open' Klasse zum Body
        document.body.classList.toggle('menu-open');
        
        // Fügt/entfernt die 'open' Klasse zum Navigations-Overlay
        navOverlay.classList.toggle('open');
    });

});