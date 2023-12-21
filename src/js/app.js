const button = document.querySelector('.button');
const item = document.querySelector('.item');

button.addEventListener('click', (e) => {
  // e.preventDefault();

  item.classList.toggle('read');
});