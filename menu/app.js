//items===========================================================
const menu = [
  {
    id: 1,
    title: 'buttermilk pancakes',
    category: 'breakfast',
    price: 15.99,
    img: './images/item-1.jpeg',
    desc: `I'm baby woke mlkshk wolf bitters live-edge blue bottle, hammock freegan copper mug whatever cold-pressed `,
  },
  {
    id: 2,
    title: 'diner double',
    category: 'lunch',
    price: 13.99,
    img: './images/item-2.jpeg',
    desc: `vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats `,
  },
  {
    id: 3,
    title: 'godzilla milkshake',
    category: 'shakes',
    price: 6.99,
    img: './images/item-3.jpeg',
    desc: `ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.`,
  },
  {
    id: 4,
    title: 'country delight',
    category: 'breakfast',
    price: 20.99,
    img: './images/item-4.jpeg',
    desc: `Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut, `,
  },
  {
    id: 5,
    title: 'egg attack',
    category: 'lunch',
    price: 22.99,
    img: './images/item-5.jpeg',
    desc: `franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up `,
  },
  {
    id: 6,
    title: 'oreo dream',
    category: 'shakes',
    price: 18.99,
    img: './images/item-6.jpeg',
    desc: `Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everyday`,
  },
  {
    id: 7,
    title: 'bacon overflow',
    category: 'breakfast',
    price: 8.99,
    img: './images/item-7.jpeg',
    desc: `carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird `,
  },
  {
    id: 8,
    title: 'american classic',
    category: 'lunch',
    price: 12.99,
    img: './images/item-8.jpeg',
    desc: `on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut  `,
  },
  {
    id: 9,
    title: 'quarantine buddy',
    category: 'shakes',
    price: 16.99,
    img: './images/item-9.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
  {
    id: 10,
    title: 'steak dinner',
    category: 'dinner',
    price: 39.99,
    img: './images/item-10.jpeg',
    desc: `skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.`,
  },
];

//target elements
const sectionCenter = document.querySelector('.section-center');
const btnContainer = document.querySelector('.buttons');

//event listeners
window.addEventListener('DOMContentLoaded', function () {
  showMenu(menu);
  filterBtns();
});

//functions
function showMenu(array) {
  const menuArray = array
    .map(function (item) {
      return `<div class="item">
                    <div class="img-container">
                        <img src=${item.img} class="menu-img" alt="">
                    </div>
                    <div class="item-content">
                        <div class="menu-title">
                            <h4>${item.title}</h4>
                            <span>${item.price}</span>
                        </div>
                        <div class="menu-text">
                            <p>${item.desc}</p>
                        </div>
                    </div>
                </div>`;
    })
    .join('');
  sectionCenter.innerHTML = menuArray;
}

function filterBtns() {
  const filterBtns = menu.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ['all']
  );
  const btnsArray = filterBtns
    .map(function (item) {
      return `<button type="button" data-id="${item}" class="btn menu-btn">${item}</button>`;
    })
    .join('');
  btnContainer.innerHTML = btnsArray;

  const btns = btnContainer.querySelectorAll('.menu-btn');

  btns.forEach(function (btn) {
    btn.addEventListener('click', function (e) {
      const filterValue = e.currentTarget.dataset.id;
      const filteredArray = menu.filter(function (item) {
        if (filterValue == item.category) {
          return item;
        }
      });
      if (filterValue == 'all') {
        showMenu(menu);
      } else {
        showMenu(filteredArray);
      }
    });
  });
}
