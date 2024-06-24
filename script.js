document.addEventListener("DOMContentLoaded", function() {
  const navLinks = document.querySelectorAll('.nav-links a');
  const menuBtn = document.querySelector(".menu-btn");
  const navlinks = document.querySelector(".nav-links");

    menuBtn.addEventListener("click", () => {
      navlinks.classList.toggle("mobile-menu");
    });

    navLinks.forEach(link => {
      link.addEventListener('click', function(event) {
        event.preventDefault();

        navLinks.forEach(link => {
           link.parentElement.classList.remove('active');
        });

        this.parentElement.classList.add('active');

        if (navlinks.classList.contains('mobile-menu')) {
            navlinks.classList.remove('mobile-menu');
        }

        const targetId = this.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        targetSection.scrollIntoView({
            behavior: 'smooth'
        });
      });
    });
});