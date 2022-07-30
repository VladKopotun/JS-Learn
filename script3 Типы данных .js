//!Undefined- Неопределенный тип
let userName; //*Обявляет переменную
console.log(typeof userName); //*Получает тип данных
console.log(userName); //*Получаем значение переменной

//?Проверяем определена ли переменная
if (userName === undefined) {
  console.log("Переменная НЕ определена");
} else {
  console.log("Переменная определена");
}

//?Либо с помощью оператора typeoff
if (typeof userName === "undefined") {
  console.log("Переменнная НЕ определена");
} else {
  console.log("Переменная определена");
}

//!------------------------------------------------------------------------------
//!Null
let userclass = null;
console.log(userclass);

//!------------------------------------------------------------------------------
//!Bullean
let willYouMarryMe = true; //*Так же может быть значение False
if (willYouMarryMe) {
  console.log(":)");
} else {
  console.log(":(");
}

//*Там же можно использовать с оператором сравнения ">,<"
let trueOrFalse = 58 > 18;
console.log(trueOrFalse);

//!------------------------------------------------------------------------------
//!NUMBER
let userAge = 20;
let userHeight = 1.83;
console.log(userAge);
console.log(typeof userAge);
console.log(userHeight);
console.log(typeof userHeight);

//?Infinity-Математическая бесконечность
let getInfinity1 = 58 / 0;
console.log(getInfinity1);
console.log(typeof getInfinity1);

//?-Infinity
let getInfinity2 = -58 / 0;
console.log(getInfinity2);
console.log(typeof getInfinity2);

//?Nan-Вычислительная ошибка
let getNan = "Фрилансер" / 10;
console.log(getNan);
console.log(typeof getNan);
/*
Если где - то в математическом выражении есть 
Nan,то  результатом вычислений с его участием будет NaN.
*/

//!------------------------------------------------------------------------------
//!BigInt
const bigInteger = 11111111111111111111111111111111111111111111111111n;
console.log(typeof bigInteger);

//!------------------------------------------------------------------------------
//!String
//? 3-Вида кавычек "",'',``
let userName1 = "Фрилансер по жизни";
console.log(typeof userName1);

let userNameV2 = "Фрилансер по жизни";
console.log(typeof userNameV2);

let userNameV3 = `Фрилансер по жизни`;
console.log(typeof userNameV3);


//? ${userAge} - Встроенное выражение переменной
let userAge1 = 20;
let userAgeInfo = `Возраст: ${userAge}!`;
console.log(userAgeInfo);

//!------------------------------------------------------------------------------
//!Object
let userInfo = {
  name: "Фрилансер по жизни",
  age: 36,
};
console.log(userInfo);
console.log(typeof userInfo);

//!------------------------------------------------------------------------------
//!Symbol
let id = Symbol("id");
console.log(typeof id);

//!------------------------------------------------------------------------------
//!Function
let funcVarible = function name(params) {
  //*код функции
};
console.log(typeof funcVarible);

//!------------------------------------------------------------------------------
//!ПРЕОБРАЗОВАНИЕ ТИПОВ
//?Строковое преобразование
let userAge2 = 58;
console.log(userAge2);
console.log(typeof userAge2);

userAge2 = String(userAge2);

console.log(userAge2);
console.log(typeof userAge2); 

//*Ещё один пример
let userTrue = true;
console.log(userTrue);
console.log(typeof userTrue);

userTrue = String(userTrue);

console.log(userTrue);
console.log(typeof userTrue);

//?Численное преобразование
let userAge4 = "58";
console.log(userAge4);
console.log(typeof userAge4);

userAge4 = Number(userAge4);

console.log(userAge4);
console.log(typeof userAge4);

//?Логическое преобразование
let userAge5 = 58;
console.log(userAge5);
console.log(typeof userAge5);

userAge5 = Boolean(userAge5);

console.log(userAge5);
console.log(typeof userAge5);
