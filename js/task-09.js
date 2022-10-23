/*Напиши скрипт, который изменяет цвета фона элемента <body> через инлайн стиль при клике на
 button.change-color и выводит значение цвета в span.color.

<div class="widget">
  <p>Background color: <span class="color">-</span></p>
  <button type="button" class="change-color">Change color</button>
</div>

Для генерации случайного цвета используй функцию getRandomHexColor.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}*/
const changeColorBtn = document.querySelector(".change-color");
const nameOfColor = document.querySelector(".color");
const body = document.querySelector("body");
const randColor = ('click',() =>{
  return "#" +
  Math.floor(Math.random()*16777215).toString(16).
  padStart(6, '0');
})
document.body.style.backgroundColor = randColor();

nameOfColor.textContent = getRandomHexColor();
changeColorBtn.addEventListener("click", getRandomHexColor);
body.style.backgroundColor = nameOfColor.textContent;
document.querySelector('button').addEventListener('click',() =>
{
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

);
