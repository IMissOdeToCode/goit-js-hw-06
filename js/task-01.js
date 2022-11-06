const categories = document.querySelector('#categories');
const items = document.querySelectorAll('.item');

const numberOfCategories = categories.children.length;
console.log(`Number of categories: ${numberOfCategories} \n\n`);

items.forEach((item) => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}\n\n`);
});
