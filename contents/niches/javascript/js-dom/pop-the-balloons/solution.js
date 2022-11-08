const list = document.getElementById('list');
const li = list.querySelectorAll('li');

[...li].map(item => item.addEventListener('mouseover', () => {
   item.style.visibility = "hidden";
}))