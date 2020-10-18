class MobileMenu {
  constructor() {
    this.menuIcon = document.querySelector('.header__menu-icon');
    this.menuContent = document.querySelector('.header__nav');
    this.header = document.querySelector('.header');
    this.events();
  }

  events() {
    this.menuIcon.addEventListener('click', () => this.toggleMenu());
  }

  toggleMenu() {
    this.menuContent.classList.toggle('header__nav--visible');
    this.header.classList.toggle('header--expanded');
    this.menuIcon.classList.toggle('header__menu-icon--close');
  }
}

export default MobileMenu;
