//!Переменные

//Обявление без значения
let studyTwoLesons;

//Присвоение значения
studyTwoLesons1 = "freelance";

//Обявление переменной и присвоениня значения сразу
let studyTwoLesons2 = "freelance";
console.log(studyTwoLesons2);

//!----------------------------------------------------------------
//!ОБЯВЛЕНИЕ НЕСКОЛЬКИХ ПЕРЕМЕННЫХ
//?В строку через запятую
let myName1 = "Vladyslav Kopotun",
  myAge1 = 36,
  myMessage1 = "Развивайся и становись лучше каждый день!";
//?Через запятую
let myName2 = "Vladyslav Kopotun",
  myAge2 = 36,
  myMessage2 = "Развивайся и становись лучше каждый день";
//?Отдельно
let myName3 = "Vladyslav Kopotun";
let myAge3 = 36;
let myMessage3 = "Развивайся и становись лучше каждый день";

//!----------------------------------------------------------------
//!ИЗМЕНЕНИЕ ЗНАЧЕНИЯ ПЕРЕМЕННОЙ
let myAge4 = 36;
myAge4 = 18;
console.log(myAge4);

//!ПЕРЕДАЧА ЗНАЧЕНИЯ ПЕРЕМЕННЫХ
let myAge5 = 36;
let myNewAge = 18;

//Копирует значение переменной myNewAge в переменную myAge
myAge = myNewAge;
console.log(myAge);

//!----------------------------------------------------------------------------
//!ОБЛАСТЬ ВИДИМОСТИ ПЕРЕМЕННЫХ
//?Пример блока инструкций
function testBlock() {
  console.log("Study");
  console.log("JS");
}
testBlock();

//?Видимость переменной только внутри блока инструкций
function testBlock() {
  let myAge = 36;
  console.log(myAge);
}
testBlock();

console.log(myAge); //*Перменная не видна за пределами блока

//!----------------------------------------------------------------------------
//!КОНСТАНТЫ
const myAge = 36;
myAge = 18; //*Нельзя изменить константу будет ошибка

//?Смена значений в константе
//*ОбЪект с данными
const userProfile = {
  name: "Vladyslav Kopotun",
  age: 20,
  message: "Развивайся и становись лучше каждый день!",
};
console.log(userProfile);
//Далее я меняю  значение из полей объекта
userProfile.age = 18;
//Ошибки нет,данные изменились
console.log(userProfile);
