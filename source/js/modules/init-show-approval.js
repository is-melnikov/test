const formBtn = document.querySelector('.form__btn');
const rules = document.querySelector('.feedback__rules');

const initShowApproval = () => {
  formBtn.addEventListener('click', () => {
    rules.classList.add('is-active');
  });
}

// const initAddLike = () => {
//   if (likeButtons) {
//     likeButtons.forEach((elem) => {
//       elem.addEventListener('click', () => {
//         elem.classList.toggle('like-btn--blue');
//         elem.classList.remove('focus-visible');
//         if (elem.classList.contains('like-btn--blue')) {
//           elem.setAttribute('aria-label', 'Убрать товар из избранного');
//         } else {
//           elem.setAttribute('aria-label', 'Добавить товар в избранное');
//         }
//       });
//     });
//   }
// };

export {initShowApproval};
