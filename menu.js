const svg = document.querySelector('.svg-menu');
const menu = document.querySelector('.menu');
const menuOff = document.querySelector('.menu-off');


svg.addEventListener('click', () =>{
    menu.classList.add('menu-enable');
})
menuOff.addEventListener('click', () =>{
    menu.classList.remove('menu-enable');
})



console.log('Вёрстка валидная +10\nВёрстка семантическая +20\nДля оформления СV используются css-стили +10\nКонтент размещается в блоке, который горизонтально центрируется на странице +10\nВёрстка адаптивная+10\n и тд\n Видео добавлено в футере по иконке ютуба')