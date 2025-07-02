document.addEventListener('DOMContentLoaded', () => {
    // --- HAMBURGER-MENÜ-LOGIK ---

    const menuToggle = document.getElementById('menu-toggle');
    const navOverlay = document.querySelector('.nav-overlay');

    if (menuToggle && navOverlay) { // Sicherstellen, dass die Elemente existieren
        menuToggle.addEventListener('click', () => {
            // Fügt/entfernt die 'menu-open' Klasse zum Body
            document.body.classList.toggle('menu-open');
            
            // Fügt/entfernt die 'open' Klasse zum Navigations-Overlay
            navOverlay.classList.toggle('open');
        });
    }
});