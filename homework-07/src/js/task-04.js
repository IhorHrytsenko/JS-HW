const number = document.querySelector('span');
const changeNumber = document.querySelectorAll('button')

let decrement = document.querySelector('button[data-action=decrement]');;
let increment = document.querySelector('button[data-action=increment]');;

decrement.addEventListener ('click', (changeNumber) => {
     number.textContent = Number(number.textContent) - 1} 
)

increment.addEventListener ('click', (changeNumber) => {
    number.textContent = Number(number.textContent) + 1} 
)
