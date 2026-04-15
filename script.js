document.addEventListener('DOMContentLoaded', () => {
    const preloader = document.getElementById('preloader');
    document.body.style.overflow = 'hidden';

    window.addEventListener('load', () => {
        setTimeout(() => {
            preloader.classList.add('fade-out');
            document.body.style.overflow = 'auto';
        }, 2800); 
    });

    const toggle = document.querySelector('.menu-toggle');
    const nav = document.querySelector('.main-nav');
    if(toggle) {
        toggle.addEventListener('click', () => { nav.classList.toggle('active'); });
    }

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) { target.scrollIntoView({ behavior: 'smooth' }); }
        });
    });
});