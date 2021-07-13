const inputRange = document.querySelector('#font-size-control');
const currentText = document.querySelector('#text');

inputRange.addEventListener('change', onEventChangeRange);

function onEventChangeRange(){
currentText.setAttribute('style', 'font-size:' + inputRange.value + 'px');
console.log(inputRange.value);
}

