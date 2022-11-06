const refs = {
  input: document.querySelector('#name-input'),
  output: document.querySelector('#name-output'),
};

refs.input.addEventListener('input', (e) => {
  if (e.target.value === '') {
    refs.output.textContent = 'Anonymous';
    return;
  }
  refs.output.textContent = e.target.value;
});
