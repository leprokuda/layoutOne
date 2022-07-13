// document.addEventListener("DOMContentLoaded", function() {
//   let colorHeaderLink = document.querySelector('.header__link')
//   console.log(colorHeaderLink)
//   colorHeaderLink.style.color === 'rgba(130, 130, 130, 1)'
//   console.log(colorHeaderLink.style.color)
//   colorHeaderLink.addEventListener('click', () => {
//     colorHeaderLink.style.color === 'rgb(0, 0, 0)'
//   })
// });



// Переключение активного меню при скроле
// window.addEventListener('scroll', () => {
//   let scrollDistance = window.scrollY;

//   console.log(scrollDistance)

//   document.querySelectorAll('section').forEach((el, i) => {
//     if (el.offsetTop - document.querySelector('header__nav').clientHeight <= scrollDistance) {
//       document.querySelectorAll('.header__nav a').forEach((el) => {
//         if (el.classList.contains('active')) {
//           el.classList.remove('active')
//         }
//       })

//       document.querySelectorAll('.header__nav li')[i].querySelector('a').classList.add('active')
//     }
//   })
// })



// Выпадающее меню при клике на бургер

const iconBurger = document.querySelector('.header__burger')

if (iconBurger) {
  const menuNav = document.querySelector('.header__nav')
  iconBurger.addEventListener("click", function(e) {
    document.body.classList.toggle('_lock')
    iconBurger.classList.toggle('_active')
    menuNav.classList.toggle('_active')
  })
}




// Прокрутка к разделу при клике раздела в меню

const menuLinks = document.querySelectorAll('.header__link[data-goto]')

if (menuLinks.length > 0) {
  menuLinks.forEach(menuLink => {
    menuLink.addEventListener("click", onMenuLinkClick)
  })

  function onMenuLinkClick(e) {
    const menuLink = e.target
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
      const gotoBlock = document.querySelector(menuLink.dataset.goto)
      const gotoBlockValue = gotoBlock.getBoundingClientRect().top + scrollY - document.querySelector('header').offsetHeight

      window.scrollTo({
        top: gotoBlockValue,
        behavior: "smooth"
      })
      e.preventDefault()
    }
  }
}