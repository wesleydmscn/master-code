// Editor Elements
const editorCode = document.querySelector('.editor_code');
const editorButton = document.querySelector('#editor_run');

// Problem
const fullName = document.querySelector('#fullName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');

editorCode.addEventListener('input', () => {
  eval(editorCode.innerText);

  editorButton.innerText = "Verify Code";
  editorButton.classList.remove('fail');
  editorButton.classList.remove('sucess');
})

editorButton.addEventListener('click', () => {
  if (fullName.value === `${firstName.value} ${lastName.value}`) {
    editorCode.classList.remove('error');
    editorCode.classList.add('correct');

    editorButton.innerText = "Sucess";
    editorButton.classList.remove('fail');
    editorButton.classList.add('sucess');
  } 
  else {
    editorCode.classList.remove('correct');
    editorCode.classList.add('error');

    editorButton.innerText = "Fail";
    editorButton.classList.remove('sucess');
    editorButton.classList.add('fail');
  }
})