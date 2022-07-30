"use strict";

//!Инструкция IF-"если"
//*Пример номер 1
let message = "Привет,фрилансер!";

if (2 > 1) {
  //Код выполниться только если выражение в скобках вернет true
  console.log(message);
}

//*Пример номер 2
let message2 = "Привет,фрилансер!";

let first = 5;
let second = 10;

if (first === second) {
  //Код выполниться только если выражение в скобках вернет true
  console.log(message2);
}

//*Пример номер 3
let message3 = "Привет, фрилансер!";
//?Более сложное условие
if ((2 + 1 === 3 && "1" == 1) || (10 > 5 && 10 === 1)) {
  //Код выполниться только если выражение в скобках вернет true
  console.log(message3);
}

//*Пример номер 4
let message4 = "Hello,Frilanc!";
//?Короткая запись
//Код выполниться только если выражение в скобках вернет true
if (2 > 1) console.log(message4);

//!----------------------------------------------------------------
//!Блок ELSE-"Тогда" И ELSE IF-"Тогда если"
//?Если не выполняеться if то выполниться else

//*Пример Else
let message5 = "Hello,Frilanc!";
let number = 5;

if (number > 1) {
  console.log(message5);
} else {
  console.log("Условия не выполнено :(");
}

//*Пример Else If
//?Для большого количества условий
let message6 = "Привет,фрилансер!";
let number2 = 14;

if (number2 > 50) {
  console.log("Число больше 50");
} else if (number2 > 30) {
  console.log("Число больше 30");
} else if (number2 > 10) {
  console.log("Число больше 10");
} else if (number2 > 1) {
  console.log("Число больше 1");
} else {
  console.log("Условия не выполнено :(");
}

//!----------------------------------------------------------------
//!Условный оператор "?" заменяет if-"если"
//?Без оператора "?"
let boy = "Привет";
let boyEnd;

if (5 > 10) {
  boyEnd = ", Вася!";
} else {
  boyEnd = ", Оля!";
}
boy += boyEnd;
console.log(boy);

//?С использованием оператора "?"

let sms = "Hello";

//* :-заменяет else
let smsEnd = 5 > 10 ? ", Вася!" : ",Оля!";

sms += smsEnd;
console.log(sms);

//?Дольше пишеться но за то легко читаемая "Рекомендуеца"

let sms2 = "hello";
let sms2End;

if (sms2End > 30) {
  sms2End = ", Vasia";
} else if (5 > 20) {
  sms2End = ", Ola";
} else if (5 > 15) {
  sms2End = ", Miwa";
} else if (5 > 10) {
  sms2End = ", Andrei";
} else {
  sms2End = ", Inokenti";
}

//!----------------------------------------------------------------
//! " : " Заменяет else и else if

//*Короткая реализацыя менее читабильная
sms2End =
  5 > 30
    ? ", Vasia!"
    : 5 > 20
    ? ", Ola!"
    : 5 > 10
    ? ", Miwa!"
    : 5 > 1
    ? ", Andrei!"
    : " Innokentei!";
sms2 += sms2End;
console.log(sms2);
