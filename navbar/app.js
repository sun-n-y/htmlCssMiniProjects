//target elements
const navBtn = document.querySelector('#nav-toggle');
const links = document.querySelector('#nav-links');

navBtn.addEventListener('click', function () {
  links.classList.toggle('show-links');
});
