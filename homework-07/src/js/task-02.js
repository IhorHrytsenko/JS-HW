const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

const mainElem = document.querySelector('#ingredients');

// ingredients.forEach (elem => {  
//   let el = document.createElement('li');
//   el.textContent = elem;
//   mainElem.appendChild(el);
// });

ingredients.map (elem => {  
  let el = document.createElement('li');
  el.textContent = elem;
  mainElem.appendChild(el);
});
