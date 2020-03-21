let menu = document.getElementsByClassName("menu")[0],
    menuItem = document.getElementsByClassName("menu-item"),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    //column = document.getElementsByClassName('column'),
    adv = document.getElementsByClassName('adv')[0];

li.classList.add('menu-item');
li.textContent = "Пятый элемент";
title.textContent = 'Мы продаем только подлинную технику Apple';


menu.insertBefore(menuItem[2], menuItem[1]);
menu.appendChild(li);
adv.remove();


console.log(menu);
console.log(menuItem);
//console.log(menu-item[5]);