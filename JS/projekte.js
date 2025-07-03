document.addEventListener('DOMContentLoaded', function () {
    const projectItems = document.querySelectorAll('.list-group-item');
    const startColor = [96, 15, 172];
    const endColor = [154, 111, 194];

    projectItems.forEach((item, index) => {
        const progress = index / (projectItems.length - 1);
        const r = Math.round(startColor[0] + (endColor[0] - startColor[0]) * progress);
        const g = Math.round(startColor[1] + (endColor[1] - startColor[1]) * progress);
        const b = Math.round(startColor[2] + (endColor[2] - startColor[2]) * progress);
        item.style.setProperty('--hover-bg-color', `rgb(${r}, ${g}, ${b})`);
    });
});
