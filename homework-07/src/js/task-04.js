const number = document.querySelector('span');
const changeNumber = document.querySelectorAll('button')


let decrement;
let increment;

changeNumber.forEach((elem, index) => {
    if (elem.dataset.action === "decrement"){
        decrement = changeNumber[index];
    }
    if (elem.dataset.action === "increment"){
        increment = changeNumber[index];
    } 
})

decrement.addEventListener ('click', (changeNumber) => {
     number.textContent = Number(number.textContent) - 1} 
)

increment.addEventListener ('click', (changeNumber) => {
    number.textContent = Number(number.textContent) + 1} 
)
