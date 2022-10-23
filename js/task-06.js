/*Напиши скрипт, который при потере фокуса на инпуте (событие blur), проверяет его содержимое
 на правильное количество введённых символов.

<input
  type="text"
  id="validation-input"
  data-length="6"
  placeholder="Please enter 6 symbols"
/>

Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество символов, то border инпута становится зелёным, если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid, которые мы уже добавили в исходные файлы задания.

#validation-input {
  border: 3px solid #bdbdbd;
}

#validation-input.valid {
  border-color: #4caf50;
}

#validation-input.invalid {
  border-color: #f44336;
}*/
/*const inputRef = document.querySelector(".input");

inputRef.addEventListener("blur",(event) => {
    inputRef.classList.remove('valid');
    inputRef.classList.remove('invalid');
    event.currentTarget.value.length == + (inputRef.dataset.length)
    ? inputRef.classList.add('valid')
    :nputRef.classList.add('invalid')
}  );*/
 /*console.log(inputName);
function outOfFocusInputName(event){
    console.log(event.currentTarget.value);
    if(inputName.textContent === inputName.CDATA_SECTION_NODE.length){
        inputName.classList.add("valid");
            } else {
                inputName.classList.add("invalid");
            }
            return inputName;
}
*/
const inputName = document.querySelector('#validation-input');
inputName.addEventListener('blur', outOfFocusInputName);
console.dir(inputName);
function outOfFocusInputName(event){
inputName.classList.remove('valid');
inputName.classList.remove('invalid');
console.log(event.currentTarget.value);
if(event.currentTarget.value.length == inputName.dataset.length){
    inputName.classList.add('valid');
} else {
  inputName.classList.add('invalid');  
}
return inputName;}