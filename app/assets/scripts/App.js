import '../styles/styles.css';

import MobileMenu from './modules/mobileMenu.js';

const mobileMenu = new MobileMenu();

if (module.hot) {
  module.hot.accept();
}
