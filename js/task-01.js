/*
Напиши скрипт который:

Посчитает и выведет в консоль количество категорий в ul#categories, то есть элементов li.item.
Для каждого элемента li.item в списке ul#categories, найдет и выведет в консоль текст заголовка элемента (тега <h2>) и количество элементов в категории (всех вложенных в него <li>).
В результате, в консоли будут выведены такие сообщения.

Number of categories: 3

Category: Animals
Elements: 4

Category: Products
Elements: 3

Category: Technologies
Elements: 5*/

/*const categories = document.querySelectorAll('.item');

console.log('');
console.log(`Number of categories: ${categories.length}`);
console.log('');

categories.forEach(category=>{
const group = [...category.children];

group.forEach(element=> {
if (element.tagName === 'h2'){
console.log('Elements: ${element.textContent}');
}
});
group.forEach(element =>{
    if (element.tagName ==='ul'){
        console.log('Elements: ${element.children.length}');
    }
})
console.log('');
});*/




const categories = document.querySelectorAll('.item');
console.log(`Number of categories:${categories.length}`);
console.log('');
categories.forEach(item=>{
    console.log(`Category:${item.firstElementChild.textContent}`);
     console.log(`Elements:${item.lastElementChild.children.length}`)
     
     console.log('');
});