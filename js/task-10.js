function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function getRandomColor() {
  return `#${getRandomHex()}${getRandomHex()}${getRandomHex()}`;
}

function getRandomHex() {
  return Math.round(Math.random() * 256)
    .toString(16)
    .padStart(2, '0');
}

const refs = {
  boxes: document.querySelector('#boxes'),
  // controls: document.querySelector('#controls'),

  createBtn: document.querySelector('[data-create]'),
  destroyBtn: document.querySelector('[data-destroy]'),
};

// refs.controls.addEventListener('click', (event) => {
//   if (event.target.nodeName !== 'BUTTON') {
//     console.log(event.target.nodeName);
//     return;
//   }
//   console.log(event.target.textContent);
// });

refs.createBtn.addEventListener('click', (event) => {});
refs.destroyBtn.addEventListener('click', (event) => {
  console.log(getRandomHex());
});

console.log(refs);

// <div class="box"></div>;
