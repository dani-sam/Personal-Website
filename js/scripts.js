/*!
* Start Bootstrap - Freelancer v7.0.0 (https://startbootstrap.com/theme/freelancer)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-freelancer/blob/master/LICENSE)
*/
//
// Scripts
// 

window.addEventListener('DOMContentLoaded', event => {

    // Navbar shrink function
    var navbarShrink = function () {
        const navbarCollapsible = document.body.querySelector('#mainNav');
        if (!navbarCollapsible) {
            return;
        }
        if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
        } else {
            navbarCollapsible.classList.add('navbar-shrink')
        }

    };

    // Shrink the navbar 
    navbarShrink();

    // Shrink the navbar when page is scrolled
    document.addEventListener('scroll', navbarShrink);

    // Activate Bootstrap scrollspy on the main nav element
    const mainNav = document.body.querySelector('#mainNav');
    if (mainNav) {
        new bootstrap.ScrollSpy(document.body, {
            target: '#mainNav',
            offset: 72,
        });
    };

    // Collapse responsive navbar when toggler is visible
    const navbarToggler = document.body.querySelector('.navbar-toggler');
    const responsiveNavItems = [].slice.call(
        document.querySelectorAll('#navbarResponsive .nav-link')
    );
    responsiveNavItems.map(function (responsiveNavItem) {
        responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
                navbarToggler.click();
            }
        });
    });

});
// ====================================================================
// 🔥 SKILL BAR + % COUNTER ANIMATION
// ==================================================================== //

// Animate percentage numbers 0 → target
function animatePercentageNumbers() {
    const values = document.querySelectorAll(".val");

    values.forEach(val => {
        let target = +val.getAttribute("data-target");
        let current = 0;
        let speed = target / 120; // slower or faster count

        let counter = setInterval(() => {
            current += speed;
            if (current >= target) {
                current = target;
                clearInterval(counter);
            }
            val.textContent = Math.floor(current) + "%";
        }, 20);
    });
}

// Animate skill progress bars
document.addEventListener("DOMContentLoaded", () => {

    const bars = document.querySelectorAll(".progress-bar");
    const skillsSection = document.querySelector(".skills");

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {

                // Fill bars smoothly
                bars.forEach(bar => {
                    bar.style.width = bar.dataset.progress + "%";
                });

                // Start number animation
                animatePercentageNumbers();

                observer.disconnect(); // run ONE time only
            }
        });
    });

    if (skillsSection) observer.observe(skillsSection);
});
