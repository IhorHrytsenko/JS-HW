const number = document.querySelector('span');
const changeNumber = document.querySelectorAll('button')

const decrement = changeNumber[0];
const increment = changeNumber[1];

decrement.addEventListener ('click', (changeNumber) => {
     number.textContent = Number(number.textContent) - 1} 
)

increment.addEventListener ('click', (changeNumber) => {
    number.textContent = Number(number.textContent) + 1} 
)






