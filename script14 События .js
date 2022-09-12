//! События onclick

//* Использование DOM-объекта

//const button = document.querySelector(".button");

/* 
button.onclick = function () {
    console.log('Клик')
}
*/

/*
function showConsole() {
  console.log("Клик");
}
button.onclick = showConsole; //*Без круглых скобок
*/
//*Круглые скобки при вызаве функции выполняют функцию без события

//!-------------------------------------------------------------
//! Обработчик события addEventListener/removeEventListener
//? Основной способ назначения обработчиков!
//* element.addEventListener(event, handler[,options]);

/*
const buttonTwo = document.querySelector(".button");


buttonTwo.addEventListener("click", function (e) {
  console.log("Клик!");
});
buttonTwo.addEventListener("click", function (e) {
  console.log("Клак!");
});
*/

/*
function showConsole() {
  console.log("Click!");
  buttonTwo.removeEventListener("click", showConsole);
  //*Выключает обработчик 
}
buttonTwo.addEventListener("click", showConsole);
*/

//?--------------------------------
//? Опции

{
  // Создал блок
  const options = {
    capture: false, // фаза, на которой должен сработать обработчик
    once: true, // если true, тогда обработчик будет автоматически удалён после выполнения.
    passive: false, // если true , то указывает, что обработчик никогда не вызовет pravenDefault()
  };

  function showConsole() {
    //console.log("Click!");
  }

  //buttonTwo.addEventListener("click", showConsole, options);
} // Закрыл блок

//? Объект события

{
  function showConsole(event) {
    //*Тип события
    //console.log(event.type);
    //*Объект на котором сработал обработчик
    //console.log(event.target);
    //*Объект к которому назначен обработчик
    //console.log(event.currentTarget)
    //*Положение курсора по оси X
    //console.log(event.clientX);
    //*Положение курсора по оси Y
    //console.log(event.clientY);
    //*Все детали события
    //console.log(event);
  }
  //buttonTwo.addEventListener("click", showConsole);
  //buttonTwo.addEventListener("mouseenter", showConsole);
}

//!--------------------------------------------------------------
//! Всплытие и погружение

{
  /*
const block = document.querySelector(".block");
const blockInner = document.querySelector(".block__inner");
const blockInnerInner = document.querySelector(".block__inner-inner");
*/
  /*
?Всплытие
*Когда на элементе происходит событие, обработчик сначала
*срабатывает на нём, потом на его родителе,затем выше и так далее,
*вверх по цепочке предков.
*/
  /*
?Погружение
*Для того чтобы что-то всплыло,оно должно сначало погрузиться :)
*/
  /*
  block.addEventListener("click", function (event) {
    console.log("Клик на блок!");
    console.log(event.target);
  });

  blockInner.addEventListener(
    "click",
    function (event) {
      console.log("Клик на Блок второго уровня!");
    },
    { capture: true }
  );

  blockInnerInner.addEventListener("click", function (event) {
    console.log("Клик на Блок третьего уровня!");
    Остановка всплытия . Делать это стоит очень осторожно
    event.stopPropagation();
  });
*/
  /*
  В современной разработке стадия погружения используеться очень редко,
  обычно события обрабатываються во время всплытия 
  */
}

//!--------------------------------------------------------------
//! Делегирование событий

/*
 *Всплытие и перехват событий позволяет реализовывать
 *один из самых важных приёмов разработки - делегирование.
 */

{
  //* Сильно нагрузит систему - Плохо!
  /*
  const buttonTwo = document.querySelectorAll(".button");

  function showConsole() {
    console.log("Ура!");
  }

  buttonTwo.forEach((buttonItem) => {
    buttonItem.addEventListener("click", showConsole);
  });
*/
  //*Делегирование событий - Хорошо
  /*
  const learn = document.querySelector(".learn");

  function showConsole() {
    console.log("Ура!");
  }

  learn.addEventListener("click", function (event) {
    if (event.target.closest(".button")) {
      showConsole();
    }
  });
  */
}

//!--------------------------------------------------------------
//! Действия браузера по умолчанию - отмена !
//* Браузер имеет базовые действия которые иногда нам не нужны
//* Поэтому есть возможности их отключить

{
  const linkOne = document.querySelector(".lesson__link");

  linkOne.addEventListener(
    "click",
    function (event) {
      console.log("Наши действия");
      //Отменит стандартное действие браузера (переход по ссылке)
      event.preventDefault();
    }
    //{ "passive": true } //Сложная штука , я не понял.
  );
}

//!--------------------------------------------------------------
//! Основы событий мыши
//* Можно разделить на два типа "Простые" и "Комплексные".

/* 
?Простые события
mousedown / mouseup - Кнопка мыши нажата / отпущена над элементом.
mouseover / mouseout - Курсор мыши появляеться над элементом и уходит с него.
mousemove - Когда движение мыши над элементом генерирует это событие.
contextmenu - 
Вызываеться при попытке открытия контекстного меню,
как правило,нажатием правой кнопки мыши.
Но,заметим, это не совсем событие мыши,оно может вызываться и специальной
клавишей клавиатуры.

?Комплексные события
click - Вызываеться при mousedown, а затем mouseup над одним и тем же
элементом,если использовалась основная кнопка мыши.
dblclick - Вызываеться двойным кликом на элементе.

Комплексные события состоят из простых!

*/

{
  const button = document.querySelector(".button");

  button.addEventListener("mousedown", function (event) {
    console.log(`Нажата кнопка ${event.which}`);
  });

  button.addEventListener("click", function (event) {
    console.log("Нажата основная кнопка мыши");
  });

  button.addEventListener("contextmenu", function (event) {
    console.log(`Вызвано контекстное меню (не основная кнопка мыши)`);
  });

  /*
   *event.which = 1 - Нажата основная кнопка мыши (обычно левая)
   *event.which = 2 - Нажата средняя кнопка мыши (Колесо)
   *event.which = 3 - Нажата не основная кнопка мыши (обычно правая)
   */

  //?---------------------------------
  //? Координаты : clientX/Y, pageX/Y

  const blockForMouse = document.querySelector(".mousemoveblock");

  blockForMouse.addEventListener("mousemove", function (event) {
    blockForMouse.innerHTML = `clientX - ${event.clientX} <br> clientY - ${event.clientY} `;
  });
}
