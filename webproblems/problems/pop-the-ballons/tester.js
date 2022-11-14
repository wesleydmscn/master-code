import { textarea } from "../../resources/base/base.js";
import { editorButton } from "../../resources/base/base.js";

import { testSucess } from "../../resources/base/base.js";
import { testFail } from "../../resources/base/base.js";

textarea.value = `const list = document.getElementById('list');`

// Problem
const ballons = document.querySelectorAll('li');

editorButton.addEventListener('click', () => {
  const test = [...ballons].every(ballon => ballon.style.visibility === 'hidden');

  if (test) {
    testSucess();
  }
  else {
    testFail();
  }
})