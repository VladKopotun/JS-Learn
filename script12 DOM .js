//! Window - Ширина окна браузера
const windowWidth = window.innerWidth;
console.log(`Ширина окна браузера: ${windowWidth}px!`);

//!-----------------------------------------------------------------
//!BOM Navigation

/*
С помощью объекта navigation ,
мы можем получить информацию о самом 
браузере и операционной системе.
*/

//?----------------------------------------
//? Брузер
console.log(navigator.userAgent);

if (navigator.userAgent.includes("Chrome")) {
  console.log("Браузер Хром");
} else if (navigator.userAgent.includes("Firefox")) {
  console.log("Браузер Firefox");
}

//?----------------------------------------
//?Платформа
console.log(navigator.platform);

//?----------------------------------------
//? Location
/*
С помощью объекта location мы можем получить текущий URL или 
перенаправить браузер по новому адресу.
*/
//* Получаем URL
console.log(location.href);

//* Меняем URL
//* location.href = "https://www.google.com";

//?----------------------------------------
//?History
/*
Объект history позволяет управлять историей браузера,
передвигаться по посещенным ранее страницам.
*/

history.back();
history.forward();

//?----------------------------------------
//? Alert
//alert("Привет!");

//? Confirm
//const confirmResult = confirm("Are you sure you want to continue?");
//console.log(confirmResult);

//? Prompt
//const promptResult = prompt("Кто ты ? Как тебя зовут ?");
//console.log(promptResult);

//!-----------------------------------------------------------------
//! DOM - Навигация по документу
//! Самые верхние элементы дерева доступны как свойства объекта document

/*
const headElement = document.head;
const bodyElement = document.body;

console.log(headElement);
console.log(bodyElement);
*/

//* Получаем объект body !!!
const bodyElement = document.body;

//* Первый и последний дочерние элементы
const firstChildNode = bodyElement.firstChild;
const lastChildNode = bodyElement.lastChild;

console.log(firstChildNode); // Первый дочерний узел
console.log(lastChildNode); // Последний дочерний узел

//* Всегда подключай javascript в самом конце документа !

//?----------------------------------------
//? Коллекция childNodes содержит список ВСЕХ дочерних , включая текстовые узлы.
const childNodes = bodyElement.childNodes;
//console.log(childNodes);

//*Для проверки наличия дочерних узлов существует также специальная функция hasChildNodes()
//console.log(bodyElement.hasChildNodes());

/*
childNodes похож на массив но на самом деле это коллекция -
особый перебираемый объект - псевдомассив.
Отличия от массивов:
1.Для перебора коллекции мы можем использовать for..of
2.Методы массивов не будут работать,потому что коллекция - это не массив
*/

//*Перебор коллекции

for (let node of childNodes) {
  console.log(node); // Покажет все узлы из коллекции
}

//* "Живые" коллекции
/*Почти все DOM - коллекции, за небольшим исключением ,"живые".
Другими словами, они отражают тукущее состояние DOM.
Если мы сохраним ссылку на body.childNodes и добавим/удалим узлы в DOM,
то они появятся в сохранённой колекции автоматически.
*/

//* Только для чтения
/*
DOM-коллекции, и даже более - все навигационые свойства,
перечисленные далее, доступны только для чтения.
Мы не можем заменить один дочерний узел на другой,
просто написав childNodes[i] = ...
Для измененния DOM требуються другие методы.
*/

//?----------------------------------------
//? Соседние и родительские узлы
const previousSiblingNode = bodyElement.previousSibling; //Предидущий род. узел
const nextSiblingNode = bodyElement.nextSibling; // Следующий род. узел
const parentNode = bodyElement.parentNode; // Родитель объекта

console.log(previousSiblingNode);
console.log(nextSiblingNode);
console.log(parentNode);

//* Первые и последние дочерние элементы!
const firstChild = bodyElement.firstElementChild; //Первый дочерний элемент
const lastChild = bodyElement.lastElementChild; //Последний дочерний элемент
console.log(firstChild);
console.log(lastChild);

//* Соседние и родительские элементы
const previousSibling = bodyElement.previousElementSibling; // Предидущий элемент
const nextSibling = bodyElement.nextElementSibling; //  Следующий элемент
const parentElement = bodyElement.parentElement; // Родительский элемент

console.log(previousSibling);
console.log(nextSibling);
console.log(parentElement);

//?----------------------------------------
//? children = Колекция содержит в себе только элементы "HTML" - теги.
const bodyChildren = bodyElement.children;
console.log(bodyChildren);

//!-----------------------------------------------------------------
//! Поиск элементов и все виды поиска.
//! elem.querySelectorAll(CSS); - Статическая коллекция

//* Поиск по селектору класса
const elemsOne = document.querySelectorAll(".lesson__list");
console.log(elemsOne);

//* Поиск по селектору тега
const elemsTwo = document.querySelectorAll("li");
console.log(elemsTwo);

//* Поиск по cмешанному селектору тега и класса
const elemsThree = document.querySelectorAll("li.lesson__item-list");
console.log(elemsThree);

//* Поиск по тегу первого уровня вложености
const elemsFour = document.querySelectorAll(".lesson__list>li");
console.log(elemsFour);

//* Поиск по нескольким классам
const elemsFive = document.querySelectorAll(".lesson__list, .lesson__text");
console.log(elemsFive);

//* Поиск по вложенным классам
const elemsSix = document.querySelectorAll(".lesson__list .lesson__text");
console.log(elemsSix);

//* Поиск по ID
const elemsSeven = document.querySelectorAll("#listItem");
console.log(elemsSeven);

//* Поиск по атрибуту
const elemsEight = document.querySelectorAll("[data-item]");
console.log(elemsEight);

//* Поиск по атрибуту со значением
const elemsNine = document.querySelectorAll('[data-item="85"]');
console.log(elemsNine);

//?----------------------------------------
//? Получение конкретного элемента коллекции
const elems = document.querySelectorAll("li");
console.log(elems[2]); // Выводит третий объект

//*Можем перебрать  колекцию с помощью цыкла for..of
/*
for (const item of elems) {
  console.log(item);

}
*/
//*Так же можно использовать метод forEach
/*
elems.forEach((item) => {
  console.log(item);
});
*/
//?----------------------------------------
//? Искать можно не только в document
const subList = document.querySelectorAll(".lesson__sub-list");
const subItems = subList[0].querySelectorAll("li");
console.log(subItems);

//?----------------------------------------
//? elem.querySelector(CSS) - Возвращает первый элемент внутри elem
//? соответствующий данному CSS - селектору.

//?----------------------------------------
//? document.qetElementById(ID)
//? Ищет только id - уникальный и поиск только внутри document!

//?----------------------------------------
//? elem.getElementsByTagName(tag) - ищет элементы с данным тегом и возвращает
//? их колекцию.

const elems1 = document.getElementsByTagName("li");
console.log(elems1);

//?----------------------------------------
//? elem.getElementsByClassName(className)
//? Возвращает элементы, которые имеют данный CSS - класс.
const elems2 = document.getElementsByClassName("lesson__item-list");
console.log(elems2);

//?----------------------------------------
//? Поиск предка closest()
//? Метод ищет ближайшего предка, который соответствует CSS - селектору.
//? По иерархии от элемента до вершины.

const elems3 = document.querySelector(".lesson__item-sub-list");
const parentList = elems3.closest(".lesson__list");
console.log(parentList);

//?----------------------------------------
//? Проверка matches ничего не ищет а проверяет удовлетворяет ли элемент
//? CSS-селектору, и возвращает true или false

const elems4 = document.querySelectorAll(".lesson__item-list");
for (let elem8 of elems4) {
  if (elem8.matches('[class$="lesson__item-list-red"]')) {
    console.log("Крассный");
  } else if (elem8.matches('[class$="lesson__item-list-blue"]')) {
    console.log("Синий");
  }
}
//*Все свойства новигации о которых я писал ранее можно применять к полученным объктам

//!-----------------------------------------------------------------
//! Изменение DOM - документа

//?----------------------------------------
//? Содержимое элемента innerHTML - выводит только то что внутри элемента!

//* Получаем объект
const textElement = document.querySelector(".lesson__text");

//* Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.innerHTML; // innerHTML
console.log(textElementContent);

//* Меняем содержимое объкта
textElement.innerHTML = `Живи,а работай в свободное время!`;

//* Дописываем содержимое объекта
textElement.innerHTML = `${textElementContent}
<h2 style="color: rgb(68, 124, 228)">Живи, а работай в <span style="color: yellow">cвободное</span> время! </h2>`;
console.log(textElement.innerHTML);

//?----------------------------------------
//?  Содержимое элемента целиком outerHTML - выводит всё вместе с самим элементом в консоль!
/*
//* Получаем объект
const textElement = document.querySelector(".lesson__text");

//* Получаем содержимое объекта "как есть" вместе с HTML
const textElementContent = textElement.outerHTML; // outerHTML
console.log(textElementContent);

//* Дописываем содержимое объекта
textElement.outerHTML = `${textElementContent}
<h2 style="color: rgb(68, 124, 228)">Живи, а работай в <span style="color: yellow">cвободное</span> время! </h2>`;
console.log(textElement.outerHTML);
*/

//?----------------------------------------
//? Просто текст элемента textContent - Без HTML тегов.
/*
//* Получаем объект
const textElement = document.querySelector(".lesson__text");

//* Получаем содержимое объекта без HTML
const textElementContent = textElement.textContent; // textContent
console.log(textElementContent);

!Полезная способность записывать текст "Безопасным способом"!

textElement.textContent = `Живи, а работай в cвободное время!`;
console.log(textElement.textContent);
*/

//?----------------------------------------
//? data - Содержимое текстового узла/комментария!

//!-----------------------------------------------------------------
//! Методы создания элементов и узлов

//? Создания нового элемента (тега) createElement

const newElement = document.createElement("div");

//* Наполняем новый элемент
newElement.innerHTML = `Это уже 12 урок по JS !`;
console.log(newElement);

//?----------------------------------------
//? Создание нового текстовые узла "createTextNode"
const newText = document.createTextNode("Hello!");
console.log(newText);

//*Созданные объекты находяться в константах, но не являються частью документа

//!-----------------------------------------------------------------
//! Методы вставки

//*Получаем объект
const textElementTwo = document.querySelector(".lesson__text");

//*Создание нового элемента (тега)
const newElementTwo = document.createElement("div");

//*Наполняем новый элемент
newElementTwo.innerHTML = `<h2 style="color: rgb(68, 124, 228)">С каждым уроком всё интереснее!</h2>`;

//?----------------------------------------
//? Вставляем новый элемент...

//*Перед объектом
//textElementTwo.before(newElementTwo);

//*...после объекта
//textElementTwo.after(newElementTwo);

//*...внутрь и в начало объекта
//textElementTwo.prepend(newElementTwo);

//*...внутрь и в конец объекта
//textElementTwo.append(newElementTwo);

//? Вставка нескольких фрагментов сразу.
//textElementTwo.append(newElementTwo,"Привет!");

//*Таким способом можно вставлять и строку.

//?----------------------------------------
//? insertAdjacentHTML/Text/Element
//* Может вставлять - 3 вида. Лучше всего для Html

textElementTwo.insertAdjacentHTML(
  "beforeend",
  `<h2 style="color: rgb(68, 124, 228)">С каждым уроком всё интереснее!</h2>`
);

/*
"beforebegin" - Перед элементом
"afterbegin" - вставить в начало элемента
"beforeend" - вставить в конец элемента
"afterend" -  После элемента
*/

//?----------------------------------------
//? Перенос
//*Получаю уже существующий тег в константу
const h1 = document.querySelector("h1");

//*Переношу h1 в конец блока!
textElementTwo.append(h1);

//?----------------------------------------
//? Клонирование узлов

//*Клонирование без дочерних элементов - пустые скобки!
//*Клонирование с дочерними элементами в скобках true!
const cloneTextElement = textElementTwo.cloneNode(true);

//*Клонирую весь div c дочерними элементами и вставляю в список.
/*
const textBlock = document.querySelector(".lesson__list");
textBlock.append(cloneTextElement);
*/
//?----------------------------------------
//? Удаление узлов

//textElementTwo.remove();

//!-----------------------------------------------------------------
//! Управление class

//? Свойство className

//*Получаем элемент
const elementOne = document.querySelector(".lesson__list");

//*Получаем имена классов
const elementClassNames = elementOne.className;

//*Перезаписываем имя класса = можно увидеть в Web Tools
elementOne.className = "red";

console.log(elementOne);

//?----------------------------------------
//? Свойство classList

//*Получаем элемент
const classNames = document.querySelector(".lesson__sub-list");

//* Добавить класс
classNames.classList.add("active");

//* Удалить класс
//classNames.classList.remove("active");

//* Добавить класс, если его нет, а если есть удалить.
//classNames.classList.toggle("active");

//* Проверка наличия класса
if (classNames.classList.contains("active")) {
  console.log(`У classNames есть класс active!`);
}

//* classList являеться перебираемым можно перечислить все классы с помощью for...of
for (let classAll of classNames.classList) {
  console.log(classAll);
}

//!-----------------------------------------------------------------
//! Управление стилями

//? element.style

//*Получаем элемент
const itemLi = document.querySelector(".lesson__item-list-red");

//*Задает стиль с помощью CSS свойства.
//*Каждое свойство пишеться отдельно!

itemLi.style.color = "yellow";
itemLi.style.listStyleType = "none";
itemLi.style.fontSize = "25px";

//?----------------------------------------
//? Получение значения свойства

//*Только если оно записано в атрибуте style
console.log(itemLi.style.color);

//?----------------------------------------
//? Полная перезапись стилей style.cssText

const elementTwo = document.querySelector(".red");

elementTwo.style.cssText = `
list-style-type: none;
color:blue;
font-size: 18px;
`;

//?----------------------------------------
//? Вычислинные стили getComputedStyle(element,[pseusdo])
//? Только для чтения с его помощью нельзя внести измененния в значение

//*Получаем элемент
const elementComputed = document.querySelector(".lesson__item-list-blue");

//*Получаем стиль элемента
const elementStyle = getComputedStyle(elementComputed);
console.log(elementStyle.fontSize);

//*Получаем стиль псевдоэлемента
const elementBeforeStyle = getComputedStyle(elementComputed, "::before");
console.log(elementBeforeStyle.color);

//*Получаем число
const fontSize = parseInt(elementStyle.fontSize);
console.log(fontSize);

//? Управлять классами приоритетный вариант!

//!-----------------------------------------------------------------
//! Свойства и Атрибуты

const link = document.querySelector(".lesson__link");
const input = document.querySelector(".lesson__input");

console.log(link.href);
console.log(input.value);

//* Получить список доступных свойств
console.dir(link);

//?----------------------------------------
//? Произвольные атрибуты

//* Получаем элемент
const lessonText = document.querySelector(".lesson__text");

//* Получаем наличие атрибута
lessonText.hasAttribute("name");

//* Получаем значение атрибута
lessonText.getAttribute("name");

//* Устанавливаем значение атрибута
lessonText.setAttribute("name", "value");

//* Удаляет атрибут
lessonText.removeAttribute("name");

//? Синхронизация между атрибутами с свойствами

//* Может работать например обращаясь к атрибуту такому как id но не работает например с value

//?----------------------------------------
//? Нестандартные атрибуты dataset

//*Получаем элемент
const lessonTextTwo = document.querySelector(".lesson__text");

//*Получаем в консоль data-атрибут
console.log(lessonTextTwo.dataset.size);

//*Перезаписываем data атрибут
lessonTextTwo.dataset.size = "2000";
console.log(lessonText.dataset.size);
