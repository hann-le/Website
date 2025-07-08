// Smooth scroll for sidebar/nav links
const navLinks = document.querySelectorAll('.sidebar-nav a, nav a');
const sections = [...document.querySelectorAll('main .section')];

// Active link highlight on scroll
window.addEventListener('scroll', () => {
  let scrollPos = window.scrollY + window.innerHeight / 3;

  sections.forEach(section => {
    if (scrollPos >= section.offsetTop) {
      navLinks.forEach(link => link.classList.remove('active'));
      const activeLink = document.querySelector(`.sidebar-nav a[href="#${section.id}"], nav a[href="#${section.id}"]`);
      if (activeLink) activeLink.classList.add('active');
    }
  });
});

// Smooth scroll on link click
navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetId);
    if (targetSection) {
      window.scrollTo({
        top: targetSection.offsetTop - 60, // offset for fixed nav if any
        behavior: 'smooth'
      });
    }
  });
});

// Soft trailing pastel cursor effect
const cursor = document.createElement('div');
cursor.style.position = 'fixed';
cursor.style.top = '0';
cursor.style.left = '0';
cursor.style.width = '30px';
cursor.style.height = '30px';
cursor.style.borderRadius = '50%';
cursor.style.pointerEvents = 'none';
cursor.style.background = 'radial-gradient(circle, #f9c5d1 0%, transparent 70%)'; 
cursor.style.opacity = '0.6';
cursor.style.transform = 'translate(-50%, -50%)';
cursor.style.transition = 'transform 0.15s ease-out, opacity 0.3s ease-out';
cursor.style.zIndex = '9999';
document.body.appendChild(cursor);

window.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Fade-in effect on sections on scroll
const fadeEls = document.querySelectorAll('.fade-in');

const fadeInOnScroll = () => {
  fadeEls.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.style.opacity = '1';
      el.style.transform = 'translateY(0)';
      el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    }
  });
};

window.addEventListener('scroll', fadeInOnScroll);
window.addEventListener('load', fadeInOnScroll);
