// Select the navigation bar
const navbar = document.querySelector(".site-navbar");

// Change navbar when scrolling
window.addEventListener("scroll", () => {

  navbar.classList.toggle(
    "scrolled",
    window.scrollY > 30
  );

});


// Display the current year automatically
document.getElementById("year").textContent =
  new Date().getFullYear();


// Select navigation links and menu
const navLinks = document.querySelectorAll(
  "#mainNav .nav-link, #mainNav .btn-contact"
);

const navMenu = document.getElementById("mainNav");


// Close mobile menu after clicking a link
navLinks.forEach((link) => {

  link.addEventListener("click", () => {

    if (navMenu.classList.contains("show")) {

      bootstrap.Collapse
        .getOrCreateInstance(navMenu)
        .hide();

    }

  });

});


// Highlight the active navigation link
const sections = document.querySelectorAll(
  "header[id], section[id]"
);

const menuLinks = document.querySelectorAll(
  "#mainNav .nav-link"
);


window.addEventListener("scroll", () => {

  let currentSection = "home";

  sections.forEach((section) => {

    const sectionTop = section.offsetTop - 130;

    if (window.scrollY >= sectionTop) {

      currentSection = section.getAttribute("id");

    }

  });


  menuLinks.forEach((link) => {

    link.classList.toggle(
      "active",
      link.getAttribute("href") === `#${currentSection}`
    );

  });

});