let menuItems = document.querySelectorAll('.menu-item'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    title = document.getElementById('title'),
    adv = document.querySelector('.adv'),
    promptDiv = document.getElementById('prompt');

menuItems[1].innerText = 'Второй пункт';
menuItems[2].innerText = 'Третий пункт';

let fiveMenuItem = document.createElement('li');
fiveMenuItem.innerHTML = 'Пятый пункт';
fiveMenuItem.className = 'menu-item';
menu.appendChild(fiveMenuItem);

body.style.background = 'url(img/apple_true.jpg)';

title.innerText = "Мы продаем только подлинную технику Apple";

adv.remove();

promptDiv.innerText = 'Ваш отзыв:\n\n' + prompt('Расскажите про ваше отношение к технике Apple', '');

console.log(adv);