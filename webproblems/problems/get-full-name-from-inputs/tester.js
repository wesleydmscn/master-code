import { textarea } from "../../resources/base/base.js";
import { editorButton } from "../../resources/base/base.js";

import { testSucess } from "../../resources/base/base.js";
import { testFail } from "../../resources/base/base.js";

textarea.value = 
`const button = document.querySelector('.button');
button.addEventListener('click' , () => {
  // type in your code here
});`

// Problem
const fullName = document.querySelector('#fullName');
const firstName = document.querySelector('#firstName');
const lastName = document.querySelector('#lastName');

editorButton.addEventListener('click', () => {
  const test = fullName.value === `${firstName.value} ${lastName.value}`;

  if (test) {
    testSucess();
  } 
  else {
    testFail();
  }
})