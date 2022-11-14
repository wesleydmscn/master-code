export const textarea = document.querySelector('textarea');
export const editorButton = document.querySelector('#editor_run');

const lineNumbers = document.querySelector('.line-numbers');
const numberOfLines = textarea.value.split('\n').length;

const openModal = document.querySelector('#info');
const closeModal = document.querySelector('.close_md');

const editor = document.querySelector('.editor');
const runCode = document.querySelector('.run-code');

// Utils
export const testSucess = () => {
  editor.classList.remove('error');
  editor.classList.add('correct');

  editorButton.innerText = "Sucess";
  editorButton.classList.remove('fail');
  editorButton.classList.add('sucess');

  runCode.classList.remove('fail');
  runCode.classList.add('sucess');
}

export const testFail = () => {
  editor.classList.remove('correct');
  editor.classList.add('error');

  editorButton.innerText = "Fail";
  editorButton.classList.remove('sucess');
  editorButton.classList.add('fail');

  runCode.classList.remove('sucess');
  runCode.classList.add('fail');
}

const removeTestEvents = () => {
  editor.classList.remove('error');
  editor.classList.remove('correct');

  runCode.classList.remove('fail');
  runCode.classList.remove('sucess');

  editorButton.innerText = "Verify Code";
  editorButton.classList.remove('fail');
  editorButton.classList.remove('sucess');
}

// Editor (Line Number)
lineNumbers.innerHTML = Array(numberOfLines).fill('<span></span>').join('');

textarea.addEventListener('keyup', event => {
  const numberOfLines = event.target.value.split('\n').length;

  lineNumbers.innerHTML = Array(numberOfLines).fill('<span></span>').join('');
})

textarea.addEventListener('keydown', event => {
  if (event.key === 'Tab') {
    const start = textarea.selectionStart
    const end = textarea.selectionEnd

    textarea.value = textarea.value.substring(0, start) + '  ' + textarea.value.substring(end);

    event.preventDefault()
  }
})

// Run Code
textarea.addEventListener('input', () => {
  removeTestEvents();
})

runCode.addEventListener('click', () => {
  eval(textarea.value);
})

// Modal
openModal.addEventListener('click', () => {
  document.querySelector('#container_md').classList.add('active');
  document.body.classList.add('fullscreen');
})

closeModal.addEventListener('click', () => {
  document.querySelector('#container_md').classList.remove('active');
  document.body.classList.remove('fullscreen');
})