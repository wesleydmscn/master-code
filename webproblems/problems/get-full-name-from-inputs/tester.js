// Editor Elements
const editor = document.querySelector('.editor');
const lineNumbers = document.querySelector('.line-numbers')
const code = document.querySelector('textarea');
const runCode = document.querySelector('.run-code');

const editorButton = document.querySelector('#editor_run');

code.value = 
`const button = document.querySelector('.button');
button.addEventListener('click' , () => {
  // type in your code here
});`

// Problem
const fullName = document.querySelector('#fullName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');

editorButton.addEventListener('click', () => {
  if (fullName.value === `${firstName.value} ${lastName.value}`) {
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