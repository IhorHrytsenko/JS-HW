import './sass/main.scss';
import jsonText from './menu.json';
import templateHTML from '/templates/cardTemplate.hbs'

const menuItem = jsonText;

const Theme = {
    LIGHT: 'light-theme',
    DARK: 'dark-theme',
  };

const checkTheme = document.querySelector(".theme-switch__toggle");  
const bodyTag = document.querySelector('body');
  
const mainList = document.querySelector(".js-menu");

function createHTML(temps) {
return templateHTML(temps);
}

const resultTemplate = createHTML(menuItem);

mainList.insertAdjacentHTML("afterbegin", resultTemplate);

checkTheme.addEventListener('click', () => { 
    if (checkTheme.checked === true){
        bodyTag.classList.remove(Theme.LIGHT);
        bodyTag.classList.add(Theme.DARK);
        localStorage.setItem('CheckDark', true);
        checkTheme.setAttribute("checked" , true);
    } 
    else {
        bodyTag.classList.remove(Theme.DARK);
        bodyTag.classList.add(Theme.LIGHT);
        localStorage.setItem('CheckDark', false);
        checkTheme.setAttribute("checked" , false);
    }
});

function loadTheme(){
    if (localStorage.getItem('CheckDark') === "true"){
            checkTheme.checked = true;
            bodyTag.classList.remove(Theme.LIGHT);
            bodyTag.classList.add(Theme.DARK);
        } 
        else {
            bodyTag.classList.remove(Theme.DARK);
            bodyTag.classList.add(Theme.LIGHT);
            checkTheme.checked = false;
        }
}
loadTheme();