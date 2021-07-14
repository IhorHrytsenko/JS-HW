const buttons = document.querySelectorAll('button');
const mainDiv = document.querySelector('#boxes');
const input = document.querySelector('input');

let renderButton;
let destroyButton;

buttons.forEach((elem, index) => {
    if (elem.dataset.action === "render"){
        renderButton = buttons[index];

    }
    if (elem.dataset.action === "destroy"){
        destroyButton = buttons[index];
    } 
})

renderButton.addEventListener('click', () => onClickCreateElement(Number(input.value)));

destroyButton.addEventListener('click', () => onClickDestroyElement());

function onClickCreateElement(amount) {
    let color;

    for (let i = 0; i < amount; i++){
    color = [Math.round(Math.random() * 255), 
             Math.round(Math.random() * 255), 
             Math.round(Math.random() * 255)];

    const el = document.createElement ('div');
    el.setAttribute ('style', `width:${30 + i*10}px; height: ${30 + i*10}px; background-color: rgb(${color}); margin-top:10px`);
    el.classList.add('child-div');
    mainDiv.appendChild(el);
    }
}

function onClickDestroyElement(){
    const childDiv = document.querySelectorAll('.child-div');
    childDiv.forEach(elem => elem.remove());
}
