// script.js

// Smooth scroll for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Highlight active nav link while scrolling
window.addEventListener('scroll', () => {
  let sections = document.querySelectorAll("section");
  let scrollPos = window.scrollY + 100; // offset for header

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
      document.querySelectorAll("nav a").forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${section.id}`) {
          link.classList.add("active");
        }
      });
    }
  });
});

// Typing effect for header tagline
const text = "Aspiring Developer | Designer | Creator";
let index = 0;

function typeEffect() {
  if (index < text.length) {
    document.querySelector("header p").innerHTML += text.charAt(index);
    index++;
    setTimeout(typeEffect, 80);
  }
}

// Clear existing tagline and start typing effect
document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("header p").innerHTML = "";
  typeEffect();
});
