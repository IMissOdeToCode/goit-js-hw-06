const refs = {
  input: document.querySelector('#validation-input'),
};

refs.input.addEventListener('blur', (e) => {
  if (e.target.value.length === Number(refs.input.dataset.length)) {
    refs.input.classList.add('valid');
    refs.input.classList.remove('invalid');
    return;
  } else {
    refs.input.classList.add('invalid');
    refs.input.classList.remove('valid');
  }
});
