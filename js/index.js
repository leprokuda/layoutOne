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