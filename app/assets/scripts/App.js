import '../styles/styles.css';

import MobileMenu from './modules/mobileMenu.js';
import RevealOnScroll from './modules/revealOnScroll.js';
import StickyHeader from './modules/stickyHeader.js';

const features = document.querySelectorAll('.feature');
const testimonials = document.querySelectorAll('.testimonial');

const stickyHeader = new StickyHeader();

new MobileMenu();

new RevealOnScroll(features, 75);
new RevealOnScroll(testimonials, 60);

if (module.hot) {
  module.hot.accept();
}
