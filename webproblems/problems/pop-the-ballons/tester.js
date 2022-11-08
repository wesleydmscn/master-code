// Editor Elements
const editor = document.querySelector('.editor');
const lineNumbers = document.querySelector('.line-numbers')
const code = document.querySelector('textarea');
const runCode = document.querySelector('.run-code');

const editorButton = document.querySelector('#editor_run');

code.value = `const list = document.getElementById('list');`

// Problem
const ballons = document.querySelectorAll('li');

editorButton.addEventListener('click', () => {
  const test = [...ballons].every(ballon => ballon.style.visibility === 'hidden');

  if (test) {
    editor.classList.remove('error');
    editor.classList.add('correct');

    editorButton.innerText = "Sucess";
    editorButton.classList.remove('fail');
    editorButton.classList.add('sucess');

    runCode.classList.remove('fail');
    runCode.classList.add('sucess');
  } 
  else {
    editor.classList.remove('correct');
    editor.classList.add('error');

    editorButton.innerText = "Fail";
    editorButton.classList.remove('sucess');
    editorButton.classList.add('fail');

    runCode.classList.remove('sucess');
    runCode.classList.add('fail');
  }
})