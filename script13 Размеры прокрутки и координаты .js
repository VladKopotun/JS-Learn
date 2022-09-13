//!Размер окна браузера
//!clientWidth and clientHeight

//*Доступная ширина и высота окна браузера
const mainElement = document.documentElement;
const mainElementWidth = mainElement.clientWidth;
const mainElementHeight = mainElement.clientHeight;

console.log(mainElementHeight);
console.log(mainElementWidth);

//*Ширина и высота окна вместе с полосой прокрутки
const windowWidth = window.innerWidth;
const windowHeight = window.innerHeight;

console.log(windowHeight);
console.log(windowWidth);

//?----------------------------------------
//? Ширина и высота включая прокрученную часть!

let scrollWidth = Math.max(
  document.body.scrollWidth,
  document.documentElement.scrollWidth,
  document.body.offsetWidth,
  document.documentElement.offsetWidth,
  document.body.clientWidth,
  document.documentElement.clientWidth
);

let scrollHeight = Math.max(
  document.body.scrollHeight,
  document.documentElement.scrollHeight,
  document.body.offsetHeight,
  document.documentElement.offsetHeight,
  document.body.clientHeight,
  document.documentElement.clientHeight
);
console.log(scrollWidth);
console.log(scrollHeight);

//?----------------------------------------
//? Получить кол-во прокрученных пикселей!
//? Только для чтения

const windowScrollTop = window.pageYOffset;
const windowScrollLeft = window.pageXOffset;

console.log(windowScrollTop);
console.log(windowScrollLeft);

//?----------------------------------------
//? Управление прокруткой страницы
//? Метод scrollBy(x, y) прокручивает страницу относительно её текущего положения.

function setScrollBy() {
  window.scrollBy(0, 50);
  const windowScrollTopTwo = window.pageYOffset;
  console.log(windowScrollTopTwo);
}

//?----------------------------------------
//? Метод scrollTo(pageX, pageY) прокручивает страницу на абсолютные координаты!
//? Тоже самое что и window.scroll()

function setScrollTo() {
  window.scrollTo(0, 50);
  const windowScrollTopThree = window.pageYOffset;
  console.log(windowScrollTopThree);
}

//*Доп. параметры
function setScrollToOptions() {
  window.scrollTo({
    top: 500,
    left: 0,
    // smooth, instant,
    // либо auto; по умолчанию auto
    bahavior: "smooth",
  });
}

// Опции не работают в Safari

//?----------------------------------------
//? Управление прокруткой страницы elem.scrollIntoView
/*
Вызов elem.scrollIntoView(top) прокручивает страницу,
чтобы elem оказался вверху. У него есть один аргумент:

- если top = true(default), то страница будет прокручена,
чтобы elem появился в верхней части окна.
Верхний край элемента совмещён с верхней частью окна.

- если top = false, то страница будет прокручена, чтобы elem 
появился внизу.
Нижний край элемента будет совмещён с нижним краем окна.

*/

function setScrollIntrView(top) {
  const lessonSelected = document.querySelector(`.lesson__selected`);
  lessonSelected.scrollIntoView(top);
}

function setScrollIntrViewOptions(top) {
  const lessonSelected = document.querySelector(`.lesson__selected`);
  lessonSelected.scrollIntoView({
    //"start","center","end" or "nearest".По умолчанию "center".
    block: "center",
    //"start","center","end" or "nearest".По умолчанию "nearest"
    inline: "nearest",
    //"auto" or "smooth". По умолчанию "auto".
    behavior: "smooth",
  });
}

// Опции не работают в Safari

//?----------------------------------------
//? Управление прокруткой страницы

//* Запретить прокрутку
function setEnableDisableScroll() {
  document.body.style.overflow = "hidden";
  //document.body.classList.toggle("scroll-lock");
}

//!----------------------------------------------------------------
//! Метрики элементов на странице

//! Получаем объект
const block = document.querySelector(".lesson__block");

//?----------------------------------------
//?Позиция объекта
//?Свойства offsetParent, offsetLeft и offsetTop

//*Получаем родительские элемент
//*Относительно которого позицеонирован наш объект
const elementOffsetParent = block.offsetParent;
console.log(elementOffsetParent);

//* Получаем позицию объекта относительно предка (offsetParent)
const elementOffsetLeft = block.offsetLeft;
const elementOffsetTop = block.offsetTop;

console.log(elementOffsetLeft, elementOffsetTop);

//?----------------------------------------
//? Общие размеры объекта
//? offsetWidth and offsetHeight

//* Получаем размеры объекта
const elementOffsetWidth = block.offsetWidth;
const elementOffsetHeight = block.offsetHeight;

console.log(elementOffsetWidth, elementOffsetHeight);

//?----------------------------------------
//? Отступы внутренней части элемента от внешней!
//? clientTop и clientLeft

const elementClientTop = block.clientTop;
const elementClientLeft = block.clientLeft;

console.log(elementClientTop, elementClientLeft);

//?----------------------------------------
//? Размеры объекта без рамок и полосы прокрутки
//? clientWidth and clientHeight

const elementClientWidth = block.clientWidth;
const elementClientHeight = block.clientHeight;

console.log(elementClientWidth, elementClientHeight);

//?----------------------------------------
//? Размеры объекта включающие в себя прокрученную (которую не видно) часть.
//? В остальном  работают как clientWidth/clientHeight,
//? scrollWidth and scrollHeight

const elementScrollWidth = block.scrollWidth;
const elementScrollHeight = block.scrollHeight;

console.log(elementScrollWidth, elementScrollHeight);

//?----------------------------------------
//? Размеры прокрученной области
//? scrollLeft and scrollTop не только для чтения!

const elementScrollLeft = block.scrollLeft;
const elementScrollTop = block.scrollTop;

console.log(elementScrollLeft, elementScrollTop);

//*Методы управления прокруткой scrollBy , scrollTo and scrollIntoView !!!

//!----------------------------------------------------------------
//! Координаты относительно окна браузера
//! getBoundingClientRect

//!Получаемм объект
const item = document.querySelector(".lesson__block-item");

//?----------------------------------------
//?Получаем координаты относительно окна браузера

const getItemCoords = item.getBoundingClientRect();

console.log(getItemCoords);

//?----------------------------------------
//? Получение объекта по координатам document.elementFromPoint(x, y);

const elem = document.elementFromPoint(200, 125);
console.log(elem);
