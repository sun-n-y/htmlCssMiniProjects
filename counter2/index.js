//set initial count value
let count = 0;

//target elements
const value = document.querySelector('.counter-number');
const btns = document.querySelectorAll('.btn');

btns.forEach(function (btn) {
  btn.addEventListener('click', function (e) {
    let classValue = e.currentTarget.classList;
    if (classValue.contains('decrease')) {
      count--;
    } else if (classValue.contains('increase')) {
      count++;
    } else {
      count = 0;
    }
    if (count < 0) {
      value.style.color = 'red';
    }
    if (count > 0) {
      value.style.color = 'green';
    }
    if (count === 0) {
      value.style.color = '#222';
    }
    value.textContent = count;
  });
});
