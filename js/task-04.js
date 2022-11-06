let counterValue = 0;

const refs = {
  valueEl: document.querySelector('#value'),
  incBtn: document.querySelector('button[data-action="increment"]'),
  decBtn: document.querySelector('button[data-action="decrement"]'),
};

refs.incBtn.addEventListener('click', () => {
  counterValue += 1;
  refs.valueEl.textContent = counterValue;
});

refs.decBtn.addEventListener('click', () => {
  counterValue -= 1;
  refs.valueEl.textContent = counterValue;
});
