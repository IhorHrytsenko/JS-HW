const inputText = document.querySelector('#name-input');

const outputText = document.querySelector('#name-output');

inputText.addEventListener('keyup', () => {
    if (inputText.value && inputText.value !== false){
    outputText.textContent = inputText.value}
    else {
        outputText.textContent = 'незнакомец'
    }
})



