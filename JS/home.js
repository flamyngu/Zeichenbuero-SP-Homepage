   document.addEventListener("DOMContentLoaded", function () {
    const nav = document.querySelector(".navbar-nav");
    const links = nav.querySelectorAll(".nav-link");
    const magicLine = nav.querySelector(".magic-line");

    function updateLine(el) {
      const rect = el.getBoundingClientRect();
      const navRect = nav.getBoundingClientRect();
      magicLine.style.width = `${rect.width}px`;
      magicLine.style.left = `${rect.left - navRect.left}px`;
    }

    links.forEach(link => {
      link.addEventListener("mouseenter", () => updateLine(link));
    });

    nav.addEventListener("mouseleave", () => {
      magicLine.style.width = "0";
    });
  });

  console.log("Home.js loaded");
