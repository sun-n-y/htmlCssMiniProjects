//hex code colors
const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

//targets
const btn = document.querySelector('.btn');
const color = document.querySelector('.color');

//event listeners
btn.addEventListener('click', function () {
  let hexValue = '#';
  for (i = 0; i < 6; i++) {
    hexValue += colors[getRandomNumber()];
    console.log(hexValue);
  }
  {
    document.body.style.backgroundColor = hexValue;
    color.textContent = hexValue;
  }
});

//function to get random numbers between 0-14
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
