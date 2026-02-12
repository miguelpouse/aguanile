document.addEventListener('DOMContentLoaded', () => {
    // Toggle para el menú de navegación en móviles
    const menuToggle = document.querySelector('.menu-toggle');
    const mainNav = document.querySelector('.main-nav');
    const navList = document.querySelector('.nav-list');

    menuToggle.addEventListener('click', () => {
        mainNav.classList.toggle('active');
    });

    // Cerrar el menú al hacer clic en un enlace (en móviles)
    navList.addEventListener('click', (event) => {
        if (event.target.tagName === 'A') {
            mainNav.classList.remove('active');
        }
    });

    // Desplazamiento suave para los enlaces de navegación
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});