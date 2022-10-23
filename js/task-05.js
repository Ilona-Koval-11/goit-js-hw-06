/*Напиши скрипт который, при наборе текста в инпуте input#name-input (событие input), подставляет его
 текущее значение в span#name-output. Если инпут пустой, в спане должна отображаться строка "Anonymous".

<input type="text" id="name-input" placeholder="Please enter your name" />
<h1>Hello, <span id="name-output">Anonymous</span>!</h1>*/

const nameInputEl = document.querySelector("#name-input");
const textOutputEl = document.querySelector("#name-output");

function checkTextArea(event){
    if(nameInputEl.textContent = ""){
        textOutputEl.textContent = "Anonymous";
    } else {
       textOutputEl.textContent = event.currentTarget.value; 
    }
}
nameInputEl.addEventListener("input",checkTextArea);