// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling code
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault();
            const sectionID = link.getAttribute('href');
            const section = document.querySelector(sectionID);

            section.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    // Code to highlight active link as you scroll
    const sections = document.querySelectorAll('section');

    window.addEventListener('scroll', () => {
        let current = '';

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (pageYOffset >= sectionTop - sectionHeight / 3) {
                current = section.getAttribute('id');
            }
        });

        links.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });
});