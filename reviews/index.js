const reviews = [
  {
    img: 'https://images.pexels.com/photos/16532850/pexels-photo-16532850/free-photo-of-portrait-of-elegant-pensioner.jpeg',
    nombre: 'joey',
    job: 'web designer',
    text: 'Im baby quinoa seitan 8-bit, kitsch keytar post-ironic tattooed tacos gentrify DIY blue bottle narwhal adaptogen. Solarpunk schlitz tilde tote bag tbh coloring book.',
  },
  {
    img: 'https://images.pexels.com/photos/1205033/pexels-photo-1205033.jpeg',
    nombre: 'steve',
    job: 'photographer',
    text: 'Snackwave jawn offal microdosing pok pok ethical grailed, neutra tilde biodiesel knausgaard kombucha direct trade keffiyeh. PBR&B kogi disrupt af, four loko gatekeep artisan vegan.',
  },
  {
    img: 'https://images.pexels.com/photos/13793273/pexels-photo-13793273.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'chandler',
    job: 'race car driver',
    text: 'Stumptown everyday carry bodega boys fam mukbang pop-up taiyaki seitan palo santo sartorial art party skateboard poke. Sustainable jawn try-hard, mukbang echo park viral green juice.',
  },
  {
    img: 'https://images.pexels.com/photos/2930163/pexels-photo-2930163.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    nombre: 'ross',
    job: 'rock climber',
    text: ' Migas 3 wolf moon keytar, meh fam cray literally cardigan selfies try-hard viral affogato mixtape occupy activated charcoal. La croix fund fingerstache hashtag PBR&B 3 wolf moon godard mlkshk chia hoodie ugh.',
  },
];

//select dynamic and interactive elements
const img = document.querySelector('.img-reviews');
const author = document.querySelector('.author');
const job = document.getElementById('job');
const text = document.getElementById('text');

const prevBtn = document.querySelector('.icon-left');
const nextBtn = document.querySelector('.icon-right');
const randomBtn = document.querySelector('.review-btn');

//inital value
let currentValue = 0;

function showPerson() {
  let item = reviews[currentValue];
  img.src = item.img;
  author.textConent = reviews[currentValue].nombre;
  job.textContent = item.job;
  text.textContent = item.text;
}

window.addEventListener('DOMContentLoaded', function () {
  showPerson();
});

nextBtn.addEventListener('click', function () {
  currentValue++;
  if (currentValue > reviews.length - 1) {
    currentValue = 0;
  }
  showPerson();
});
prevBtn.addEventListener('click', function () {
  currentValue--;
  if (currentValue < 0) {
    currentValue = 3;
  }
  showPerson();
});

randomBtn.addEventListener('click', function () {
  currentValue = Math.floor(Math.random() * reviews.length);
  console.log(currentValue);
  showPerson();
});
