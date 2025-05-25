
document.querySelectorAll('.nav-links a, .btn-primary[href^="#"]').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetID = link.getAttribute('href').slice(1);
    const targetSection = document.getElementById(targetID);
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: 'smooth' });
    }
  });
});


const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 70; // Adjust for navbar height
    if (pageYOffset >= sectionTop) {
      current = section.getAttribute('id');
    }
  });

  navLinks.forEach(link => {
    link.classList.remove('active');
    if (link.getAttribute('href').slice(1) === current) {
      link.classList.add('active');
    }
  });
});


const form = document.querySelector('.contact-form');

form.addEventListener('submit', e => {
  const name = form.name.value.trim();
  const email = form.email.value.trim();
  const message = form.message.value.trim();

  if (!name || !email || !message) {
    e.preventDefault();
    alert('Please fill out all fields before submitting.');
    return;
  }


  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    e.preventDefault();
    alert('Please enter a valid email address.');
  }
});


document.querySelectorAll('.btn-primary').forEach(button => {
  button.addEventListener('mousedown', () => {
    button.style.transform = 'scale(0.95)';
  });
  button.addEventListener('mouseup', () => {
    button.style.transform = 'scale(1)';
  });
  button.addEventListener('mouseout', () => {
    button.style.transform = 'scale(1)';
  });
});
