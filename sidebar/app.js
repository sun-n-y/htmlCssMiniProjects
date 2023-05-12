// ********** nav toggle ************
// select button and links
const navBtn = document.getElementById("nav-toggle");
const sidebar = document.getElementById("sidebar");
const closebtn = document.getElementById("close-toggle");
// add event listener
navBtn.addEventListener("click", () => {
  sidebar.classList.toggle("show-sidebar");
});
closebtn.addEventListener("click", () => {
  sidebar.classList.remove("show-sidebar");
});
