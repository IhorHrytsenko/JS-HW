import './sass/main.scss';
import jsonText from './menu.json';
import templateHTML from '/templates/cardTemplate.hbs'

const menuItem = jsonText;

// console.log(menuItem);

function createHTML(temps) {
return templateHTML(temps);
}

const resultTemplate = createHTML(menuItem);

// console.log(resultTemplate);

const mainList = document.querySelector(".js-menu");
mainList.insertAdjacentHTML("afterbegin", resultTemplate);
