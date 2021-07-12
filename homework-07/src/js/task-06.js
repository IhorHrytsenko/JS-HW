const input = document.querySelector('#validation-input');

const checkLength = () => {
    if (input.value.length < input.dataset.length){
        input.classList.replace('valid', 'invalid');
        input.classList.add('invalid');
    } else {
        input.classList.replace('invalid' ,'valid'); 
        input.blur();
    }
    console.log(input.value.length);
    console.log(input.dataset.length);

}

input.addEventListener('keyup', checkLength());



// console.log(checkLength(input));
// console.log(input.value.length);
// console.log(input.dataset.length);

