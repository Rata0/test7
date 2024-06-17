const button = document.querySelector('.button');
const form = document.querySelector('.form');

button.addEventListener('click', () => {
  form.classList.toggle('open');
});
