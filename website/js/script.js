// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', false);
  });
});

// Scroll reveal
const revealEls = document.querySelectorAll('.reveal');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.15 });
revealEls.forEach(el => observer.observe(el));

// Footer year
document.getElementById('year').textContent = new Date().getFullYear();

// Lead Magnet Modal
const modal = document.getElementById('leadMagnetModal');
const leadMagnetBtn = document.getElementById('leadMagnetBtn');
const leadMagnetBtn2 = document.getElementById('leadMagnetBtn2');
const modalClose = document.getElementById('modalClose');
let modalShown = false;

// Open modal
function openModal() {
  modal.classList.add('active');
  modalShown = true;
  localStorage.setItem('leadMagnetShown', 'true');
}

// Close modal
function closeModal() {
  modal.classList.remove('active');
}

// Button clicks
if (leadMagnetBtn) leadMagnetBtn.addEventListener('click', openModal);
if (leadMagnetBtn2) leadMagnetBtn2.addEventListener('click', openModal);

// Close button
modalClose.addEventListener('click', closeModal);

// Click outside modal to close
modal.addEventListener('click', (e) => {
  if (e.target === modal) closeModal();
});

// Show modal after 20 seconds (only once per session)
if (!localStorage.getItem('leadMagnetShown')) {
  setTimeout(openModal, 20000);
}

