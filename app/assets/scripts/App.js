import '../styles/styles.css';
import 'lazysizes';

import MobileMenu from './modules/mobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll.js';
import StickyHeader from './modules/stickyHeader.js';

const features = document.querySelectorAll('.feature');
const testimonials = document.querySelectorAll('.testimonial');

new StickyHeader();
new MobileMenu();
new RevealOnScroll(features, 75);
new RevealOnScroll(testimonials, 60);
let modal;

document.querySelectorAll('.open-modal').forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    if (typeof modal === 'undefined') {
      import(/* webpackChunkName: "modal" */ './modules/modal.js')
        .then((modalData) => {
          modal = new modalData.default();
          setTimeout(() => modal.openModal(), 20);
        })
        .catch((e) => console.log(e));
    } else {
      modal.openModal();
    }
  });
});

const testimonialsSection = document.querySelector('.section-testimonials');
testimonialsSection.addEventListener('lazybeforeunveil', (e) => {
  const bg = e.target.getAttribute('data-bg');
  if (bg) {
    e.target.style.backgroundImage = `url(${bg})`;
  }
});

if (module.hot) {
  module.hot.accept();
}
