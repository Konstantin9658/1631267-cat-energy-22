const btnHeader = document.querySelector('.page-header__button');
const mainNav = document.querySelector('.main-nav__menu');

mainNav.classList.remove('main-nav--nojs');

btnHeader.addEventListener('click', function() {
  if (btnHeader.classList.contains('page-header__button--burger')) {
    btnHeader.classList.remove('page-header__button--burger');
    btnHeader.classList.add('page-header__button--closed');
    mainNav.classList.add('main-nav__menu--show');
    } else {
      btnHeader.classList.remove('page-header__button--closed');
      btnHeader.classList.add('page-header__button--burger');
      mainNav.classList.remove('main-nav__menu--show');
      }
    }
  );
