function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const refs = {
  button: document.querySelector('.change-color'),
  span: document.querySelector('.color'),
};

refs.button.addEventListener('click', (e) => {
  const randomHex = getRandomHexColor();
  document.body.style.backgroundColor = randomHex;
  refs.span.textContent = randomHex;
});
