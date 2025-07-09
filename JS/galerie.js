document.addEventListener('DOMContentLoaded', () => {
    // === 1. Elemente für BEIDE Ansichten auswählen ===
    
    // Desktop-Elemente
    const desktopPrevBtn = document.getElementById('prev-btn');
    const desktopNextBtn = document.getElementById('next-btn');
    const desktopCounter = document.getElementById('counter');
    const desktopProgressIndicator = document.querySelector('.progress-indicator');
    const backgroundImages = document.querySelectorAll('.background-image');
    
    // Mobile-Elemente
    const mobileOrientationButtons = document.querySelectorAll('.orientation-button');
    const fullscreenViewerContainer = document.getElementById('fullscreen-viewer-container');
    
    // Globale Elemente
    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');
    const body = document.body;

    // Globale Zustandsvariablen
    let currentDesktopIndex = 0;
    let totalSlides = backgroundImages.length;
    let isDesktopScrolling = false;
    let desktopProgressBars = [];
    let mobileViewerElements = {}; // Objekt zur Speicherung der mobilen Viewer-Elemente

    // === 2. Setup-Funktionen für BEIDE Ansichten ===

    /**
     * Initialisiert die Desktop-Galerie (erstellt Progress-Bars etc.)
     */
    function setupDesktopGallery() {
        if (totalSlides > 0 && desktopProgressIndicator) {
            desktopProgressIndicator.innerHTML = '';
            for (let i = 0; i < totalSlides; i++) {
                const bar = document.createElement('div');
                bar.classList.add('progress-bar');
                desktopProgressIndicator.appendChild(bar);
            }
            desktopProgressBars = desktopProgressIndicator.querySelectorAll('.progress-bar');
            updateDesktopGallery(0); // Initialzustand setzen
        }
    }

    /**
     * Initialisiert die Mobile-Galerie (erstellt den Viewer im DOM)
     */
    function setupMobileGallery() {
        if (!fullscreenViewerContainer) {
            console.error("Mobiles Viewer-Container nicht gefunden.");
            return;
        }

        const imageUrls = Array.from(document.querySelectorAll('.background-image')).map(el => getComputedStyle(el).backgroundImage.slice(5, -2));
        let currentFullscreenIndex = 0;

        // --- ÄNDERUNG HIER: Pfeil-Symbole geändert ---
        fullscreenViewerContainer.innerHTML = `
            <div class="fullscreen-viewer">
                <div class="rotate-prompt"><div class="phone-icon"></div><p>Bitte drehen Sie Ihr Gerät</p></div>
                <div class="fullscreen-image"></div>
                <div class="fullscreen-controls">
                    <button class="fullscreen-close" aria-label="Schließen">×</button>
                    <button class="fullscreen-nav" id="fullscreen-prev" aria-label="Vorheriges Bild">︿</button>
                    <button class="fullscreen-nav" id="fullscreen-next" aria-label="Nächstes Bild">﹀</button>
                </div>
            </div>`;
        // --- ENDE DER ÄNDERUNG ---

        // Elemente für die spätere Verwendung speichern
        mobileViewerElements = {
            imageUrls,
            currentFullscreenIndex,
            viewer: fullscreenViewerContainer.querySelector('.fullscreen-viewer'),
            rotatePrompt: fullscreenViewerContainer.querySelector('.rotate-prompt'),
            fullscreenImage: fullscreenViewerContainer.querySelector('.fullscreen-image'),
            controls: fullscreenViewerContainer.querySelector('.fullscreen-controls'),
            closeBtn: fullscreenViewerContainer.querySelector('.fullscreen-close'),
            prevBtn: fullscreenViewerContainer.querySelector('#fullscreen-prev'),
            nextBtn: fullscreenViewerContainer.querySelector('#fullscreen-next'),
        };

        // Event-Listener für die mobilen Steuerelemente hinzufügen
        mobileOrientationButtons.forEach((button, index) => {
            button.addEventListener('click', (e) => {
                e.preventDefault();
                // Nur ausführen, wenn wir im mobilen Modus sind
                if (window.innerWidth <= 768) {
                    openMobileViewer(index);
                }
            });
        });

        mobileViewerElements.closeBtn.addEventListener('click', closeMobileViewer);
        mobileViewerElements.nextBtn.addEventListener('click', showNextMobileImage);
        mobileViewerElements.prevBtn.addEventListener('click', showPrevMobileImage);
    }

    // === 3. Logik-Funktionen für die Desktop-Ansicht ===

    function updateDesktopGallery(newIndex) {
        if (backgroundImages[currentDesktopIndex]) {
            backgroundImages[currentDesktopIndex].classList.remove('active');
        }
        currentDesktopIndex = newIndex;
        if (backgroundImages[currentDesktopIndex]) {
            backgroundImages[currentDesktopIndex].classList.add('active');
        }
        if(desktopCounter) desktopCounter.textContent = `${currentDesktopIndex + 1} / ${totalSlides}`;
        if(desktopProgressBars.length > 0) {
            desktopProgressBars.forEach((bar, index) => {
                bar.classList.toggle('active', index === currentDesktopIndex);
            });
        }
    }

    function showNextDesktopSlide() {
        const newIndex = (currentDesktopIndex + 1) % totalSlides;
        updateDesktopGallery(newIndex);
    }

    function showPrevDesktopSlide() {
        const newIndex = (currentDesktopIndex - 1 + totalSlides) % totalSlides;
        updateDesktopGallery(newIndex);
    }
    
    // === 4. Logik-Funktionen für die Mobile-Ansicht ===

    function updateMobileImage(index) {
        const { fullscreenImage, imageUrls } = mobileViewerElements;
        fullscreenImage.style.opacity = '0';
        setTimeout(() => {
            fullscreenImage.style.backgroundImage = `url('${imageUrls[index]}')`;
            fullscreenImage.style.opacity = '1';
        }, 200);
    }

    function openMobileViewer(index) {
        let { viewer, rotatePrompt, fullscreenImage, controls } = mobileViewerElements;
        mobileViewerElements.currentFullscreenIndex = index;
        
        body.style.overflow = 'hidden';
        viewer.classList.add('active');
        rotatePrompt.classList.add('visible');
        fullscreenImage.classList.remove('visible');
        controls.classList.remove('visible');

        const phoneIcon = rotatePrompt.querySelector('.phone-icon');
        phoneIcon.style.animation = 'none';
        phoneIcon.offsetHeight;
        phoneIcon.style.animation = '';

        setTimeout(() => {
            rotatePrompt.classList.remove('visible');
            updateMobileImage(index);
            fullscreenImage.classList.add('visible');
            controls.classList.add('visible');
        }, 2400);
    }

    function closeMobileViewer() {
        mobileViewerElements.viewer.classList.remove('active');
        // Nur das Scrollen erlauben, wenn das Menü nicht offen ist
        if (!body.classList.contains('menu-open')) {
            body.style.overflow = 'auto';
        }
    }
    
    function showNextMobileImage() {
        let { currentFullscreenIndex, imageUrls } = mobileViewerElements;
        currentFullscreenIndex = (currentFullscreenIndex + 1) % imageUrls.length;
        mobileViewerElements.currentFullscreenIndex = currentFullscreenIndex;
        updateMobileImage(currentFullscreenIndex);
    }

    function showPrevMobileImage() {
        let { currentFullscreenIndex, imageUrls } = mobileViewerElements;
        currentFullscreenIndex = (currentFullscreenIndex - 1 + imageUrls.length) % imageUrls.length;
        mobileViewerElements.currentFullscreenIndex = currentFullscreenIndex;
        updateMobileImage(currentFullscreenIndex);
    }

    // === 5. Event-Listener, die auf den Modus prüfen ===

    // Desktop-Steuerung
    if (desktopNextBtn) desktopNextBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) showNextDesktopSlide();
    });
    if (desktopPrevBtn) desktopPrevBtn.addEventListener('click', () => {
        if (window.innerWidth > 768) showPrevDesktopSlide();
    });
    window.addEventListener('wheel', (event) => {
        if (window.innerWidth <= 768 || body.classList.contains('menu-open') || isDesktopScrolling) return;

        if (event.deltaY > 0) showNextDesktopSlide();
        else if (event.deltaY < 0) showPrevDesktopSlide();

        isDesktopScrolling = true;
        setTimeout(() => { isDesktopScrolling = false; }, 1000);
    });
    
    // Hamburger-Menü (funktioniert immer)
    if (menuToggle && navOverlay) {
        menuToggle.addEventListener('click', () => {
            body.classList.toggle('menu-open');
            navOverlay.classList.toggle('open');
            
            if (body.classList.contains('menu-open')) {
                body.style.overflow = 'hidden';
            } else {
                // Scrollen nur erlauben, wenn der mobile Viewer nicht aktiv ist
                if (window.innerWidth <= 768 && !mobileViewerElements.viewer.classList.contains('active')) {
                     body.style.overflow = 'auto';
                } else if (window.innerWidth > 768) {
                    body.style.overflow = 'hidden';
                }
            }
        });
    }

    // === 6. Hauptfunktion zum Umschalten der Ansicht ===

    function setViewMode() {
        const isCurrentlyMobile = window.innerWidth <= 768;

        if (isCurrentlyMobile) {
            // Mobile Ansicht
            body.style.overflowY = 'auto';
            body.style.overflowX = 'hidden';
        } else {
            // Desktop Ansicht
            body.style.overflow = 'hidden';
            // Falls der mobile Viewer offen war, schließe ihn beim Wechsel
            if (mobileViewerElements.viewer && mobileViewerElements.viewer.classList.contains('active')) {
                closeMobileViewer();
            }
            // Stelle sicher, dass die Desktop-Galerie korrekt angezeigt wird
            updateDesktopGallery(currentDesktopIndex);
        }
    }

    // === 7. Initialisierung ===
    
    // Setup für beide Modi durchführen
    setupDesktopGallery();
    setupMobileGallery();
    
    // Den initialen Ansichtsmodus festlegen
    setViewMode();
    
    // Bei jeder Größenänderung des Fensters den Modus erneut prüfen
    window.addEventListener('resize', setViewMode);
});