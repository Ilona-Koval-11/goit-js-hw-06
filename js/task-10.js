/*Напиши скрипт создания и очистки коллекции элементов. Пользователь вводит количество элементов в input
 и нажимает кнопку Создать, после чего рендерится коллекция. При нажатии на кнопку Очистить,
  коллекция элементов очищается.

<div id="controls">
  <input type="number" min="1" max="100" step="1" />
  <button type="button" data-create>Create</button>
  <button type="button" data-destroy>Destroy</button>
</div>

<div id="boxes"></div>

Создай функцию createBoxes(amount), которая принимает один параметр - число.
 Функция создает столько <div>, сколько указано в amount и добавляет их в div#boxes.

Размеры самого первого <div> - 30px на 30px.
Каждый элемент после первого, должен быть шире и выше предыдущего на 10px.
Все элементы должены иметь случайный цвет фона в формате HEX. Используй готовую функцию getRandomHexColor для
 получения цвета.
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

Создай функцию destroyBoxes(), которая очищает содержимое div#boxes, тем самым удаляя все созданные элементы.*/

const inputNumberRef = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.querySelector('#boxes');
const boxesCreated =[];

inputNumberRef.addEventListener('input', getCurrentInputValue);
createButton.addEventListener('click', createBoxes);

function getCurrentInputValue(event){
  return event.currentTarget.value;
}

function createBoxes(amount){
  boxesContainer.innerHTML = '';
  amount = Number(inputNumberRef.value);

  for (let i = 0; i < inputNumberRef.value; i += 1){
    const box = document.createElement('div');
    box.style.width = `${30 + 10 * i} px`;
    box.style.height = `${30 + 10 * i} px`;
    box.style.backgroundColor = `${getRandomHexColor ()}`;
    box.style.marginTop = '20px';
    boxesCreated.push(box);
    
  };
  boxesContainer.append(...boxesCreated);
 };


destroyButton.addEventListener('click', destroyAllBoxes);
function destroyAllBoxes() {
  boxesContainer.innerHTML = '';
  inputNumberRef.value = '';
}


function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
  .padStart(6, '0')}`;
}

