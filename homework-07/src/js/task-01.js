const mainListNumber = document.querySelectorAll (".item")

console.log( `В списке ${mainListNumber.length} категории.` );

mainListNumber.forEach(
    (item) => {
        console.log("Категория: ", item.querySelector('h2').textContent);
        console.log("Количество элементов: ", item.querySelectorAll('li').length);   
    }
);


