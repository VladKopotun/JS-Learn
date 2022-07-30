//?Обявление функции (Function Declaration)

/*function name(параметры) {
  // Тело (код) функции
}
Как правило в имени используеться определенные префиксы обозначающие 
действие после которых следует обЪект действия.

Например функции начинающиеся с 
"show..." обычно что-то показывают,
"get..." - возвращает значение,
"calc..." - что-то вычисляют,
"create..." - что-то создаёт,
"check..." - что-то проверяют и возвращают логическое значение,и т.д.

Примеры:
showMessage - показать сообщение
getOptions - получить параметры
calcSum - посчитать сумму
и т.д.

*/
/*function showMessage() {
  console.log("Сообщения");
}
showMessage(); //Вызов функции
*/

//!----------------------------------------------------------------
//!Вложеность и видимость функций
//*Вложенные функции нельзя вызвать за пределами функции это вызовит ошибку
function getSumm() {
  let numOne, numTwo;

  function getNumOne() {
    numOne = 1;
  }
  function getNumTwo() {
    numTwo = 2;
  }
  getNumOne();
  getNumTwo();

  let numSumm = numOne + numTwo;
  console.log(numSumm);
}
getSumm();

//!----------------------------------------------------------------
//!ФПЖ говорит что не должен работать вызов функции в не блока но он работает!
("use strict");
if (2 > 1) {
  function getSumm2() {
    let numOne2, numTwo2;

    function getNumOne() {
      numOne2 = 1;
    }
    function getNumTwo() {
      numTwo2 = 2;
    }
    getNumOne();
    getNumTwo();

    let numSumm2 = numOne2 + numTwo2;
    console.log(numSumm2);
  }
}
getSumm2();

//!----------------------------------------------------------------
//!Локальные и внешние переменные

function showMessage1() {
  //?Локальная переменная
  let message1 = "Сообщение";
  console.log(message1);
}
//*Не работает локальная переменная в не Function
//*console.log(message1);- Ошибка

//?-----------------------------------------------------------------------------
//?Внешняя переменная
let message2;

function showMessage2() {
  //*Используеться внешняя переменная
  message2 = "Сообщение";
}
showMessage2();
console.log(message2);

//?-----------------------------------------------------------------------------
//?Внешняя переменная и локальная в одном примере
let message3 = "Сообщение-1";

function showMessage3() {
  //*Локальная переменная
  let message3 = "Сообщение-2";
  console.log(message3);
}
console.log(message3);
showMessage3();

//?-----------------------------------------------------------------------------
//?Глобальная переменная
let globalVar = "Я глобальная переменная";

function getSumm3() {
  let numOne2, numTwo2;

  function getNumOne() {
    numOne2 = 1;
    console.log(globalVar);
  }
  function getNumTwo() {
    numTwo2 = 2;
  }
  getNumOne();
  getNumTwo();

  let numSumm = numOne2 + numTwo2;
  console.log(globalVar);
}
console.log(globalVar);
getSumm3();

//!-------------------------------------------------------------------------
//! Параметры (Аргументы)

function calcSumm(numOne = 1, numTwo = 2) {
  console.log(`Переменная numOne:${numOne}`);
  console.log(`Переменная numTwo:${numTwo}`);

  let numSumm = numOne + numTwo;

  console.log(`Сумма:${numSumm}`);
}
calcSumm(5, 5);

//?Функции-колбэки
//*Как и значения по умолчанию в ( ) могут быть и другие функции
//*Тут подключение из calcSumm2 при его вызове двух функиций
function calcSumm2(numOne, numTwo, more, less) {
  let numSumm = numOne + numTwo;

  if (numSumm > 3) {
    more();
  } else {
    less();
  }
}

function showMoreMessage() {
  console.log("Больше чем 3");
}
function showLessMessage() {
  console.log("Меньше чем 3");
}
calcSumm2(1, 1, showMoreMessage, showLessMessage);

//!-------------------------------------------------------------------------
//! Возврат результата - return

function calcSumm3(numOne, numTwo) {
  let numSumm = numOne + numTwo;

  //Возврат-Директива return
  //Как только доходит до этого места функция прекращает свою работу
  return numSumm;
  //Данный код не выполниться
}

//*Получем результат в переменную присвоев ей функцию
let funcRezult = calcSumm3(2, 2);
console.log(`Сумма:${funcRezult}`);

//!-------------------------------------------------------------------------
//! Рекурсия
//*Внутри функции используеться другая под функция для выполнения пол задачи
//*Когда функия вызывает саму себя называют Рекурсия
function getSumm4(numOne, numTwo) {
  let numSumm = calcSumm4(numOne, numTwo);

  console.log(numSumm);
}
function calcSumm4(numOne, numTwo) {
  return numOne + numTwo;
}
getSumm4(5, 5);

//? Пример
function calcSumm5(numOne, numTwo) {
  let result = 1;
  //Умножаем result на numOne . numTwo раз в цыкле
  for (let i = 0; i < numTwo; i++) {
    result *= numOne;
  }
  return result;
}
console.log(calcSumm5(2, 3));

//? Записан с помощью рекурсии
function calcSumm6(numOne, numTwo) {
  if (numTwo === 1) {
    return numOne;
  } else {
    return numOne * calcSumm6(numOne, numTwo - 1);
  }
}
console.log(calcSumm6(3, 3));

//!-------------------------------------------------------------------------
//!Функциональные выражения (Function Expression)

//*Обявляем переменную и присваиваем ей функцию без имени
let showMessage = function () {
  console.log("Привет!");
};
//-Обязательно в конце ";"
showMessage();
//-Вызов такой функции "Имя переменной();"

//*Вывод в переменную ранее добавлинную функцию
function getSumm5() {
  let summ = 6 + 9;
  console.log(summ);
}
let someVar = getSumm5;

getSumm5();
someVar();

//?Различия между Обявлением функции (Function Declaration) и Функциональное выражение (Function Expression)
//*Обявление функции(Function Declaration)
//Вызов функции до её обявления и после возможно!
getSumm6();

function getSumm6() {
  let summ = 1 + 2;
  console.log(summ);
}

//*Функциональное выражение (Function Expression)
let showMessage5 = function () {
  console.log("Привет!");
};
showMessage5();
//Вызов только после выражения

//!-------------------------------------------------------------------------
//!Функции стрелки (arrow function)

//*Функциональное выражение (Function Expression)
/*let имяПеременной = function (параметр, ...параметр) {
  return выражение;
};

//*Стрелочная функция (arrow function)
let имяПеременной2 = (параметр, ...параметр) => выражение;
*/

//*Однострочная стрелочная функция
let getMessage = (text, name) => text + "," + name + "!";

console.log(getMessage("Привет", "Вася"));

//*Много строчная  стрелочная функция
let getMessageTwo = (text, name) => {
  let message = text + "," + name + "!";
  return message;
};
console.log(getMessageTwo("Привет", "Diana"));

//!-------------------------------------------------------------------------
//!Планирование setTimeout и setInterval

/*
Что бы реализовать планирование существует два метода:
1.setTimeout позволяет вызвать функцию один раз 
через определённый интервал времени.
2.setInterval позволяет вызывать функцию регулярно,повторяя вызов через
определённый интервал времени.

setTimeout(функия или код,задержка,параметр,...параметр);
setInterval(функция или код, задержка, параметр,...параметр);

*/

function showMessage6(text, name) {
  console.log(`${text}, ${name}!`);
}
//setTimeout(showMessage6, 5000, "Привет", "Влад");
//setInterval(showMessage6, 3000, "Привет", "Влад");

/** 
//*Планирование setTimeout и setInterval
function showNumberOne(num) {
  console.log(num);
  if (num < 5) {
    setTimeout(showNumberOne, 1000, ++num);
  }
}
//Выводит каждую секунду число на один больше прошлого
setTimeout(showNumberOne, 1000, 1);
**/

//*ClearTimeout
function showNumberTwo(num2) {
  console.log(num2);
  let timeId = setTimeout(showNumberTwo, 1000, ++num2);
  if (num2 === 6) {
    clearTimeout(timeId);
  }
}
setTimeout(showNumberTwo, 5000, 0);

//!-------------------------------------------------------------------------
//!Предназначения функиций
/*
Должны быть простые и короткие выполняли только одну функицию
Для использования 2 функций одновременно можно использовать новую функцию 
для обединения 
*/
//Функция соединения строк
function createMessage(text, name) {
  return `${text},${name}`;
}
//Функция вывода в консоль
function showMessage10(message) {
  console.log(message);
}
//ОбЪединяющие функции, вызываються обе функции
function initMessage(text, name) {
  showMessage10(createMessage(text, name));
}
initMessage("Привет", "Владос!");
