document.addEventListener("DOMContentLoaded", function() {
    function loadNavbar() {
        const navbarHTML = `
            <a href="index.html">
                <div class="logo-container">
                    <img class="logo" src="assets/imgs/logo.svg" alt="NeuroINT logo">
                    <img class="logo-name" src="assets/imgs/logoOnlyName.png" alt="NeuroINT logo">
                </div>
            </a>
            <ul class="nav-links">
                <li><a href="index.html">Home</a></li>
                <li><a href="services.html">Services</a></li>
                <li><a href="contact.html">Contact</a></li>
                <li><a href="careers.html">Careers</a></li>
                <li><a href="about.html">About</a></li>
            </ul>`
        ;
        document.querySelector('.navigation').innerHTML = navbarHTML;

        // Highlight the active link
        const links = document.querySelectorAll('.nav-links a');
        links.forEach(link => {
            if (link.href === window.location.href) {
                link.classList.add('active');
            }
        });
    }

    loadNavbar();
});