import '../styles/styles.css';

import MobileMenu from './modules/mobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll.js';

const features = document.querySelectorAll('.feature');
const testimonials = document.querySelectorAll('.testimonial');

new MobileMenu();

new RevealOnScroll(features, 75);
new RevealOnScroll(testimonials, 60);

if (module.hot) {
  module.hot.accept();
}
