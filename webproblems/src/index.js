const openModal = document.querySelector('#info');
const closeModal = document.querySelector('.close_md');

openModal.addEventListener('click', () => {
  document.querySelector('#container_md').classList.add('active');
  document.body.classList.add('fullscreen');
})

closeModal.addEventListener('click', () => {
  document.querySelector('#container_md').classList.remove('active');
  document.body.classList.remove('fullscreen');
})

document.addEventListener('keydown', (event) => {
  if (event.key === 'Tab') {
    event.preventDefault();
  }
})