const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const refs = {
  ul: document.querySelector('#ingredients'),
};

const list = ingredients.map((ingredient) => {
  const li = document.createElement('li');
  li.classList.add('item');
  li.textContent = ingredient;
  return li;
});

refs.ul.append(...list);

// -----------------------------------------------
// refs.ingredientsEl.append(li);

// const getItemTemplate = (text) => `<li class="item">${text}</li>`;

// const lis = ingredients.map((ingredient) => getItemTemplate(ingredient));
// refs.ingredientsEl.insertAdjacentHTML('beforeend', lis.join(''));
