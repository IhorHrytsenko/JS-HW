const input = document.querySelector('#validation-input');

input.addEventListener('blur', onCheckLength);

function onCheckLength () {
    input.classList.add('invalid');
    if (input.value.length < input.dataset.length){
        input.classList.replace('valid', 'invalid');
    } else {
        input.classList.replace('invalid' ,'valid'); 
    }
}


