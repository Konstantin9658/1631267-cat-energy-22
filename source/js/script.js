const btnHeader = document.querySelector('.page-header__button');
const mainNavMenu = document.querySelector('.main-nav__menu');
const mainNav =  document.querySelector('.main-nav');

mainNav.classList.remove('main-nav--nojs');

btnHeader.addEventListener('click', function () {
  if (btnHeader.classList.contains('page-header__button--burger')) {
    btnHeader.classList.remove('page-header__button--burger');
    btnHeader.classList.add('page-header__button--closed');
    mainNavMenu.classList.add('main-nav__menu--show');
  } else {
    btnHeader.classList.remove('page-header__button--closed');
    btnHeader.classList.add('page-header__button--burger');
    mainNavMenu.classList.remove('main-nav__menu--show');
  }
}
);

const input = document.querySelector('.example__input');
const buttons = document.querySelectorAll('.example__btn');
const diff = document.querySelector('.example__diff');

input.addEventListener('input', function (evt) {
  const value = (100 - input.value) + '%'
  diff.style.setProperty('--diff', value);
})

for (btn of buttons) {
  btn.addEventListener('click', (evt) => {
    const btnDataValue = evt.target.dataset.value
    if (btnDataValue > 0) {
      diff.style.setProperty('--psevdo-left', '0');
    } else {
      diff.style.setProperty('--psevdo-left', '35px');
    }
    diff.style.setProperty('--diff', btnDataValue + '%');
    input.value = (100 - btnDataValue);
  })
}
