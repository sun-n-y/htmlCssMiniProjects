const colors = ['red', 'green', '#111111', '#222222'];

//select elements
const btn = document.querySelector('.btn');
const color = document.querySelector('#color');

//event listener
btn.addEventListener('click', function () {
  let randomValue = getRandomNumber();
  document.body.style.backgroundColor = colors[randomValue];
  color.textContent = colors[randomValue];
});

//funciton to get random value for use as index in colors []
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
