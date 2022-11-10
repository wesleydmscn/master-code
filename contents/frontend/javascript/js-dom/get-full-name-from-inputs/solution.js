const button = document.getElementById('button');

const firstName = document.getElementById('firstName');
const lastName = document.getElementById('lastName');
const fullName = document.getElementById('fullName');

button.addEventListener('click' , () => {
  fullName.value = `${firstName.value} ${lastName.value}`
});