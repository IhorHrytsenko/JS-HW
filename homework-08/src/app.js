const galleryItems = [
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825_1280.jpg',
    description: 'Hokkaido Flower',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/14/22/05/container-4203677_1280.jpg',
    description: 'Container Haulage Freight',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/09/47/beach-4206785_1280.jpg',
    description: 'Aerial Beach View',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2016/11/18/16/19/flowers-1835619_1280.jpg',
    description: 'Flower Blooms',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2018/09/13/10/36/mountains-3674334_1280.jpg',
    description: 'Alpine Mountains',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/23/04/landscape-4208571_1280.jpg',
    description: 'Mountain Lake Sailing',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg',
    description: 'Alpine Spring Meadows',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg',
    description: 'Nature Landscape',
  },
  {
    preview:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843__340.jpg',
    original:
      'https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg',
    description: 'Lighthouse Coast Sea',
  },
];

//==============Делаем разметку==============

const galleryList = document.querySelector('.js-gallery');
const closeBtn = document.querySelector('button[data-action="close-lightbox"]');
const galleryListAdd = [];

galleryItems.map( elem => {
  let elLi = document.createElement('li');
  let elImg = document.createElement('img');
  let elA = document.createElement('a');

  elLi.setAttribute('class', 'gallery__item');

  elLi.append(elA);
  elA.append(elImg);

  elA.setAttribute ('href', `${elem.original}`);
  elA.setAttribute('class', 'gallery__link');

  elImg.setAttribute('src', `${elem.preview}`);
  elImg.setAttribute('alt', `${elem.description}`);
  elImg.setAttribute('data-source', `${elem.original}`);
  elImg.setAttribute('class', 'gallery__image');

  galleryListAdd.push(elLi);
})

galleryList.append(...galleryListAdd);

//============Модальное окно=============

galleryList.addEventListener('click', onClickImg);
closeBtn.addEventListener('click', onClickClose);

function onClickImg (elem){
  elem.preventDefault();

  if (elem.target.nodeName !== 'IMG'){
    return;
  }

  const modal = document.querySelector('div.lightbox');
  modal.classList.add('class', 'is-open');

  const originalImg = document.querySelector('img.lightbox__image');
  originalImg.setAttribute('src', `${elem.target.dataset.source}`);
  originalImg.setAttribute('alt', `${elem.target.alt}`);

  window.addEventListener('keyup', onClickEsc);
  window.addEventListener('keyup', onNextClick);
  window.addEventListener('keyup', onPreviousClick);
}

function onClickClose (elem){
   elem.preventDefault();

  if (elem.target.nodeName !== 'BUTTON') {
    return
  } 

  closeModal();
}

function closeModal () {
  let modal = document.querySelector('div.is-open');
  modal.classList.remove('class', 'is-open');

  const originalImg = document.querySelector('img.lightbox__image');
  originalImg.setAttribute('src', ``);
  originalImg.setAttribute('alt', ``);

}

//=============Дополнительные задачи=================

const overlayClose = document.querySelector ('div.lightbox__overlay');

overlayClose.addEventListener ('click', onClickOverlay);

function onClickOverlay (overlay){
  if (!overlay.target.classList.contains('lightbox__overlay')){
    return;
  }

  closeModal();
}

function onClickEsc (key){
  if (key.code !== 'Escape')
  {return}

  closeModal();
}

const arrayEl = document.querySelectorAll('.gallery__image');

function onNextClick(event){
  if (event.code !== 'ArrowRight'){
    return;
  }

  let currentEl = document.querySelector('.lightbox__image');
  
  for (let i = 0; i < arrayEl.length; i++){
    
    if (i === arrayEl.length - 1){
      currentEl.setAttribute('src', `${arrayEl[0].dataset.source}`);
      currentEl.setAttribute('alt', `${arrayEl[0].alt}`);
      return;
    }
    
    if (currentEl.alt === arrayEl[i].alt && i < arrayEl.length){
      currentEl.setAttribute('src', `${arrayEl[i+1].dataset.source}`);
      currentEl.setAttribute('alt', `${arrayEl[i+1].alt}`);
      return;
    }
    
  }

}

function onPreviousClick(event){
  if (event.code !== 'ArrowLeft'){
    return;
  }

  let currentEl = document.querySelector('.lightbox__image');
  
  for (let i = 0; i < arrayEl.length; i++){
    if (currentEl.alt === arrayEl[0].alt){
      currentEl.setAttribute('src', `${arrayEl[arrayEl.length-1].dataset.source}`);
      currentEl.setAttribute('alt', `${arrayEl[arrayEl.length-1].alt}`);
      return;
    }

    if (currentEl.alt === arrayEl[i].alt && i < arrayEl.length){
      currentEl.setAttribute('src', `${arrayEl[i-1].dataset.source}`);
      currentEl.setAttribute('alt', `${arrayEl[i-1].alt}`);
      return;
    }
    
  }

}
