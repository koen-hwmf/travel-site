import throttle from 'lodash/throttle';
import debounce from 'lodash/debounce';

class StickyHeader {
  constructor() {
    this.header = document.querySelector('.header');
    this.pageSections = document.querySelectorAll('.page-section');
    this.browserHeight = window.innerHeight;
    this.previousScrollY = window.scrollY;
    this.events();
  }

  events() {
    window.addEventListener(
      'scroll',
      throttle(() => this.runOnScroll(), 200)
    );
    window.addEventListener(
      'resize',
      debounce(() => {
        this.browserHeight = window.innerHeight;
      }, 333)
    );
  }

  runOnScroll() {
    this.determineScrollDirection();
    if (window.scrollY > 60) {
      this.header.classList.add('header--dark');
    } else {
      this.header.classList.remove('header--dark');
    }
    this.pageSections.forEach((el) => this.calcSection(el));
  }

  determineScrollDirection() {
    if (window.scrollY > this.previousScrollY) {
      this.scrollDirection = 'down';
    } else {
      this.scrollDirection = 'up';
    }
    this.previousScrollY = window.scrollY;
  }

  calcSection(el) {
    if (
      window.scrollY + this.browserHeight > el.offsetTop &&
      window.scrollY < el.offsetTop + el.offsetHeight
    ) {
      const scrollPercent =
        (el.getBoundingClientRect().y / this.browserHeight) * 100; // percentage van hoever van de viewport top het el in beeld is
      if (
        (scrollPercent < 18 &&
          scrollPercent > -0.1 &&
          this.scrollDirection === 'down') ||
        (scrollPercent < 33 && this.scrollDirection === 'up')
      ) {
        const matchingLink = el.getAttribute('data-matching-link');
        document
          .querySelectorAll(`.header__nav-link:not(${matchingLink})`)
          .forEach((el) => el.classList.remove('is-current-link'));
        document.querySelector(matchingLink).classList.add('is-current-link');
      }
    }
  }
}

export default StickyHeader;
