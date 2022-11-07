// Editor

const textarea = document.querySelector('textarea')
const lineNumbers = document.querySelector('.line-numbers')
const numberOfLines = textarea.value.split('\n').length

lineNumbers.innerHTML = Array(numberOfLines)
  .fill('<span></span>')
  .join('')

textarea.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\n').length

  lineNumbers.innerHTML = Array(numberOfLines)
    .fill('<span></span>')
    .join('')
})

textarea.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end)

    event.preventDefault()
  }
})

textarea.addEventListener('input', () => {
  editor.classList.remove('error');
  editor.classList.remove('correct');

  runCode.classList.remove('fail');
  runCode.classList.remove('sucess');

  editorButton.innerText = "Verify Code";
  editorButton.classList.remove('fail');
  editorButton.classList.remove('sucess');
})

// Run Code
const runCode = document.querySelector('.run-code');

runCode.addEventListener('click', () => {
  eval(textarea.value);
})

// Modal
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