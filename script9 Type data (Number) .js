//!Числа в JAVASCRIPT. Тип данных number. Работа с числами.
//!Проблема неточных вычислений.

/*2-вида чисел
1)Обычные числа в 64 битнов формате
2)Bigint
*/

//Числа
let someNum = 458;
console.log(someNum);
//Десятичные числа
let someNums = 4.58;
console.log(someNums);

//!-----------------------------------------------------------------------

//!Способ написать большие числа
let someBigNum = 1e6; // 1 * 1000000
console.log(someBigNum);

let someLittleNum = 1e-6; // 1 / 1000000
console.log(someLittleNum);

//!----------------------------------------------------------------------
//! Шестнадцатеричные, двоичные и восмеричные числац.Системы счисления
//! toString()
/*Шестнадцатеричные числа широко используються в Java Script
для представления цветов,кодировки символов и многого другого.
*/

console.log(0xff); // 0xFF = 225

//?Реже используються двоичные и восьмеричные числа

console.log(0b11111111); // 255
console.log(0o377); // 255

//Метод toString(base)
//Метод num.toString(base) возвращает строковое
//Представление числа в той или иной системе счисления (base)
//base может принимать значения от 2 до 36(По умолчанию 10).
//Переводит число 255 в системы от 2 до 36.

let num = 255;
console.log(num.toString(16));
console.log(num.toString(8));
console.log(num.toString(2));

//!-------------------------------------------------------------
//!Округление чисел
//В JS встроен объект Math, который содержит несколько функций
//Для работы с округлением :

//?--------------------------------------------------------------
//?Math.floor - Округление в меньшую сторону
let num1 = Math.floor(5.8);
let num2 = Math.floor(2.2);
let num3 = Math.floor(-2.2);

console.log(num1);
console.log(num2);
console.log(num3);

//?--------------------------------------------------------------
//? Math.ceil - Округление в большую сторону
let numOne = Math.ceil(5.8);
let numTwo = Math.ceil(2.2);
let numThree = Math.ceil(-2.2);

console.log(numOne);
console.log(numTwo);
console.log(numThree);

//?--------------------------------------------------------------
//? Math.round - Округление до ближайшего целого
let num4 = Math.round(5.8);
let num5 = Math.round(2.2);
let num6 = Math.round(-2.2);

console.log(num4);
console.log(num5);
console.log(num6);

/*
Как нам получить 5.8 или 5.85?
?Способ умножения и деления.
*/
let num7 = Math.round(5.845 * 10) / 10;
console.log(num7);

let num8 = Math.round(5.845 * 100) / 100;
console.log(num8);

let num9 = Math.round(5.8449 * 100) / 100;
console.log(num9);

//?--------------------------------------------------------------
//? Метод toFixed(n) - округляет число до n знаков после запятой
//? и возвращает строковое представление результата.
let num10 = 5.845;
console.log(num10.toFixed(2));
//*Тип данных строчный

//Преобразовать в число
console.log(+num10.toFixed(1));
console.log(Number(num10.toFixed(2)));

//!-----------------------------------------------------------------------
//!Проверка: isFinite and isNaN

//*Проверка isNaN
console.log(Number(25 + "Привет!"));

console.log(isNaN(25 + "Привет!"));

//*Проверка isFinite
/* 
Преобразовывает аргумент в число и возвращает true,
если оно являеться обычным числом 
*/
console.log(isFinite("25")); // "25" -> 25 -> true
console.log(isFinite("Привет!")); // NaN -> false
console.log(isFinite(10 / 0)); //Infinity -> false

//!-----------------------------------------------------------------------------
//! parseInt(Целое число) and parseFloat(Плавающая точка)
/*
Для получения чисел из строки существует parseInt and parseFloat.
Если в процессе чтения возникает ошибка,они возвращают полученное до ошибки число.
*/
let valueOne = parseInt("150.58");
console.log(valueOne);
console.log(typeof valueOne);

let valueTwo = parseFloat("150.58");
console.log(valueTwo);
console.log(typeof valueTwo);

/*
? parseInt() имеет необязательный второй параметр.
? Он определяет систему счисления, таким образом parseInt
? может также читать строки с шестнадцатеричными числами,
? двоичными числами и т.д.:
*/
console.log(parseInt("0xff", 16));
console.log(parseInt("ff", 16));

//!----------------------------------------------------------------------
//! Другие возможности Math

//?Math.random
//*Псевдо случайное число от 0 до 1-не включительно
console.log(Math.random());
console.log(Math.random());
console.log(Math.random());

//?Math.max and Math.min
console.log(Math.max(5, 85, -49));
console.log(Math.min(5, 85, -49));

//?Math.abs()
let num11 = -58;
console.log(Math.abs(num11)); // 58

//?Math.pow(n, power)
//?Возвращает число n, возведённое в степень power
console.log(Math.pow(5, 4));
