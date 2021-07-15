const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainElem = document.querySelector('#ingredients');
const ingredientsEl = [];

ingredients.map (elem => {  
  let el = document.createElement('li');
  el.textContent = elem;
  ingredientsEl.push(el);
});

mainElem.append(...ingredientsEl);

