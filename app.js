const sections = document.querySelectorAll('.sec');
const navLinks = document.querySelectorAll('.nav-link');
const mainNavLinks = document.querySelectorAll('.main-nav .nav-link');
const navbar = document.querySelector('.main-nav');

function setActiveLink() {
  const scrollY = window.scrollY;
  
  sections.forEach((section, index) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;

    if(scrollY >= sectionTop - sectionHeight * 0.25 && scrollY < sectionTop + sectionHeight - sectionHeight * 0.25) {
      mainNavLinks.forEach((navLink) => navLink.classList.remove('active'));
      mainNavLinks[index].classList.add('active');
    }
  });
}

function smoothScroll(target) {
  const element = document.querySelector(target);
  const headerOffset = 50; // Adjust this value if you have a fixed header or menu
  const elementPosition = element.getBoundingClientRect().top;
  const offsetPosition = elementPosition - headerOffset;

  window.scrollBy({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('nav a');
  const te = document.querySelector('.down-icon-container a');
  te.addEventListener('click', function(event) {
    event.preventDefault();
    smoothScroll(te.getAttribute('href'));
  });
  links.forEach(link => {
    link.addEventListener('click', function(event) {
      event.preventDefault();
      const href = link.getAttribute('href');
      smoothScroll(href);
    });
  });
});

// document.addEventListener("DOMContentLoaded", function () {
//   const nameTitle = document.querySelector(".name-title");

//   // Add the animation class to trigger the animation
//   nameTitle.classList.add("fade-in");
// });

function fixNavbar() {
  const headerSection = document.querySelector('.header');
  const nav = document.querySelector('.main-nav');
  const distanceFromTop = headerSection.offsetHeight; // Height of the hero section

  if (window.scrollY >= distanceFromTop) {
    nav.classList.add('fixed');
  } else {
    nav.classList.remove('fixed');
  }
}

// Function to toggle the class based on scroll position
function toggleNavbarClass() {
  const aboutSection = document.querySelector('#about');
  const aboutSectionTop = aboutSection.offsetTop;
  const scrollY = window.scrollY;

  if (scrollY >= aboutSectionTop) {
    navbar.classList.add('fixed-navbar');
  } else {
    navbar.classList.remove('fixed-navbar');
  }
}

function handleHoverOpacity(event) {
  const hoveredLink = event.target;

  navLinks.forEach((link) => {
    if (link !== hoveredLink) {
      link.style.opacity = '0.50';
    }
  });
}

function resetOpacity() {
  navLinks.forEach((link) => {
    link.style.opacity = '1';
  });
}

navLinks.forEach((link) => {
  link.addEventListener('mouseenter', handleHoverOpacity);
  link.addEventListener('mouseleave', resetOpacity);
});

window.addEventListener('scroll', setActiveLink);

window.addEventListener('scroll', toggleNavbarClass);

document.addEventListener('scroll', fixNavbar);