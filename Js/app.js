// GSAP animations

gsap.fromTo(
  '.left-anim',
  {
    x: '30rem',
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 0.9,
  }
);
gsap.fromTo(
  '.right-anim',
  {
    x: '1.1rem',
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 1.9,
  }
);
gsap.fromTo(
  '.fixed',
  {
    x: '1.1rem',
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 2.5,
  }
);
gsap.fromTo(
  '.nav-links',
  {
    x: '1.1rem',
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    ease: 'back.out(1.7)',
    delay: 2.5,
  }
);

// Bubble effect for links
const links = document.querySelectorAll('.fa-brands');

links.forEach((el) => {
  el.addEventListener('mouseover', function () {
    el.classList.toggle('fa-bounce');
  });
});

// jQuerry loader

let hamburger = document.querySelector('.hamburger');

let close = document.querySelector('.times');

let mobileNav = document.querySelector('.mobile__nav');

hamburger.addEventListener('click', () => {
  mobileNav.classList.add('open');
});
close.addEventListener('click', () => {
  mobileNav.classList.remove('open');
});
