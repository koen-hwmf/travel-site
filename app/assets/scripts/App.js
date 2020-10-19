import '../styles/styles.css';

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

if (module.hot) {
  module.hot.accept();
}
