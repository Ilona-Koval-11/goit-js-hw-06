/*В HTML есть пустой список ul#ingredients.

<ul id="ingredients"></ul>

В JavaScript есть массив строк.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

Напиши скрипт, который для каждого элемента массива ingredients:

Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
Добавит название ингредиента как его текстовое содержимое.
Добавит элементу класс item.
После чего вставит все <li> за одну операцию в список ul#ingredients.
*/

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];


/*let listOfIngredients = document.querySelector('ul#ingredients');

for (let i = 0; i< ingredients.length; i +=1){
  let aNewListItem = document.createElement('li');
  aNewListItem.textContent = ingredients[i];
  aNewListItem.classList.add('item');
 listOfIngredients.append(aNewListItem)

}

console.log(listOfIngredients);*/
 const listEl = document.querySelector('ul#ingredients');
 const listElementElToAdd =[];
ingredients.forEach(ingredient =>{
  const listElementEl = document.createElement('li');
  listElementEl.textContent = ingredient;
  listElementEl.classList.add('item');
  listElementElToAdd.push(listElementEl);
});
listEl.append(...listElementElToAdd);

