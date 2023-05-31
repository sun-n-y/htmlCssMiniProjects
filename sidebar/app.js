//target elements
const navToggle = document.querySelector('.nav-toggle');
const closeToggle = document.querySelector('.close-toggle');
const sidebar = document.querySelector('#sidebar');

//event listeners
navToggle.addEventListener('click', function () {
  sidebar.classList.toggle('show-sidebar');
});

closeToggle.addEventListener('click', function () {
  sidebar.classList.remove('show-sidebar');
});

window.addEventListener('click', function (e) {
  if (e.target.classList == '' && sidebar.classList.contains('show-sidebar')) {
    sidebar.classList.remove('show-sidebar');
    console.log(e.target);
  }
});
