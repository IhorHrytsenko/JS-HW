const inputRange = document.querySelector('#font-size-control');
const currentText = document.querySelector('#text');

inputRange.addEventListener('change', onEventChangeRange);
currentText.setAttribute('style', 'font-size:' + inputRange.value + 'px');

function onEventChangeRange(){
currentText.setAttribute('style', 'font-size:' + inputRange.value + 'px');
}

