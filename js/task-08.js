const refs = {
  form: document.querySelector('.login-form'),
  email: document.querySelector('input[type=email]'),
  password: document.querySelector('input[type=password]'),
  button: document.querySelector('button[type=submit]'),
};

refs.form.addEventListener('submit', (e) => {
  e.preventDefault();
  const { email, password } = e.currentTarget.elements;

  if (email.value === '' || password.value === '') {
    alert('email of password field is empty. Type something');
    return;
  }

  const payload = {
    email: email.value,
    password: password.value,
  };

  console.log(payload);
  refs.form.reset();
});

// console.log(refs.email);
// console.log(refs.password);
// console.log(refs.button);

// const form = document.querySelector('.register-form');

// form.addEventListener('submit', (event) => {
//   event.preventDefault();
//   const {
//     elements: { username, password },
//   } = event.currentTarget;
//   console.log(username.value, password.value);
// });
