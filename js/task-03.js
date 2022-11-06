const images = [
  {
    url: 'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'White and Black Long Fur Cat',
  },
  {
    url: 'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
  },
  {
    url: 'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    alt: 'Group of Horses Running',
  },
];

// <li><img src="" alt=""></li>
const refs = {
  ul: document.querySelector('.gallery'),
};

const getItemTemplate = (url, alt) =>
  `<li><img class="item" src="${url}" alt="${alt}"></li>`;

const templatesArr = images.map((image) =>
  getItemTemplate(image.url, image.alt)
);

refs.ul.insertAdjacentHTML('beforeend', templatesArr.join(''));
refs.ul.classList.add('test-class');
