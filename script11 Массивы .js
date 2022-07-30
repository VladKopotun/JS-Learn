//! Создание масивов

let arr = new Array(); //*Используеться редко
let arr2 = [];

//!----------------------------------------------------------------
//! Значения масивов

let arr3 = [
  "Ваня",
  "Иштван",
  "Оля", //*Висячая запятая
];

//*Или

let arr4 = ["Ваня", "Иштван", "Оля"];

//?----------------------------------------------------------
//?Различные типы значений

let arr5 = [
  "Kola",
  {
    type: "JS",
    age: 36,
  },
  true,
  function () {
    console.log("Привет, я Коля");
  },
];
console.log(arr5);
console.log(arr5[0]);
console.log(arr5[1].type);
console.log(arr5[2]);
arr5[3]();

//!----------------------------------------------------------------
//! Многомерные массивы

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
console.log(matrix);
console.log(matrix[0][1]);

//!----------------------------------------------------------------
//! Получение значений

let arrOne = [
  "Vania", // 0я позиция
  "Ishtan", // 1я позиция
  "Ola", // 2я позиция
];
console.log(arrOne[1]);
console.log(arrOne[5]);

//!----------------------------------------------------------------
//!Длина масива.Свойство Length

let arrTwo = ["Vania", "vlad", "dima"];
console.log(arrTwo);
console.log(arrTwo.length); //*Количество значений в массиве

//!----------------------------------------------------------------
//!Доступ к массиву
/*
 *Массив являеться объектом и,следовательно,ведёт себя как объект!
 */
let arrThree = ["Vania", "Vlad", "Dima"];
console.log(arrThree);

let arrNew = arrThree;

arrNew.length = 2;
console.log(arrThree);

//!----------------------------------------------------------------
//!Изменить значения массива
let arrFo = ["Vania", "Iwtwan", "Ola"];

//*Меняем существующее
arrFo[0] = "Коля";
console.log(arrFo);

//*Добавляем новое
arrFo[3] = "Ваня";
console.log(arrFo);

//!----------------------------------------------------------------
//! Method push - Добавление элемента в конец массива

let arrFive = ["Vania", "ishtwan", "ola"];
arrFive.push("Вася");
console.log(arrFive);

arrFive.push("dima", "Caня");
console.log(arrFive);

//!----------------------------------------------------------------
//!Метод shift - Удаляет элемент в начале так что второй элемент становиться первым

let arrSix = ["Vania", "vlad", "dima"];
arrSix.shift();
console.log(arrSix);

//!----------------------------------------------------------------
//!Метод pop - удаляет последний элемент в массиве

let arrSeven = ["Vania", "vlad", "dima"];
arrSeven.pop();
console.log(arrSeven);

//!----------------------------------------------------------------
//! Метод unshift - добавляет элемент в начало массива

let arrEight = ["Vania", "Diana", "Ola"];

arrEight.unshift("Vasia");
console.log(arrEight);

arrEight.unshift("Lexa");
console.log(arrEight);

//?Методы push/pop выполняються быстро,а методы shift/unshift - медленно.

//!----------------------------------------------------------------
//!Удаление/добавление/изменение конкретных элементов.
//!Редактирование элементов

let arrNine = ["vania", "duda", "bogdan"];

delete arrNine[1];
console.log(arrNine);
console.log(arrNine[1]);
console.log(arrNine.length);

//?Метод splice. Позволяет добавлять, удалять и заменять элементы.

//?---------------------------------------------
//? Удаляет элемент

let orrOne = ["vania", "duda", "bogdan"];
//* Начиная с первой позиции , удаляет один элемент
orrOne.splice(1, 1);
console.log(orrOne);

//?---------------------------------------------
//? Удаляет элемент и возвращает его в переменную

let orrTwo = ["vania", "duda", "bogdan"];
let removed = orrTwo.splice(1, 1);
console.log(removed);

//?---------------------------------------------
//? Заменяет элементы

let orrThree = ["vania", "duda", "bogdan"];
//*Начиная с нулевой позиции,заменяет один элемент
orrThree.splice(0, 1, "Коля");
console.log(orrThree);

//?---------------------------------------------
//? Добавляет элементы

let orrFour = ["vania", "duda", "bogdan"];
//* Начиная с первой позиции,добовляем два элемента
orrFour.splice(1, 0, "Kola", "Mawa");
console.log(orrFour);

//?---------------------------------------------
//?Удаляет элемент

let orrFive = ["vania", "duda", "bogdan"];
//* Начиная с последеней позици,удаляет один элемент
orrFive.splice(-1, 1);
console.log(orrFive);

//!----------------------------------------------------------------
//! Копирование массивов.Метод slice

//?Копирует часть массива
let orrSix = ["vania", "ishtwan", "Ola"];

// Начиная с 1 позиции
// До второй позиции (не включая)
let orrSeven = orrSix.slice(1, 2);
console.log(orrSeven);

//Начиная с предпоследней позиции
//до последней (не включая)
let orrEight = orrSix.slice(-2, -1);
console.log(orrEight);

//?Копирует весь массив
let orrNine = orrSix.slice();
console.log(orrNine);

//!----------------------------------------------------------------
//! Метод concat . Создаёт новый массив в который копирует данные из других массивов
//! и может добавить дополнительные значения (в конец массива)

let orr1 = ["vania", "dima", "Vasia"];
let orr2 = orr1.concat("Петя");
console.log(orr2);

//!----------------------------------------------------------------
//!Поиск в массиве
/*
!Методы аналоги применяющиеся к строкам
1. arr.indexOf(item,from) ищет item , начиная с индекса from,
и возвращает индекс, на котором был найден искомый элемент,
в противном случае - 1.
2. arr.lastIndexOf(item,from) - то же самое, но ищет справа налево.
3. arr.includes(item,from) - ищет item, начиная с индекса from,
и возвращает true, если поиск успешен.
*/

let orr3 = ["vania", "dima", "Ola"];

//*indexOf
console.log(orr3.indexOf("dima"));
console.log(orr3.indexOf("Вася"));
console.log(orr3.indexOf("dima", 2));

//*includes
console.log(orr3.includes("dima"));
console.log(orr3.includes("Вася"));
console.log(orr3.includes("dima", 2));

//!----------------------------------------------------------------
//! Поиск в массиве когда его елементами являються объекты
//! Find and findIndex

//* Find -возвращает элемент который true,
//* ecли все итерации False значит undefined

let orr4 = [
  { name: "Вася", age: 36 },
  { name: "Коля", age: 18 },
  { name: "Оля", age: "Не скажу" },
];
let resultOne = orr4.find(function (item, index, array) {
  return item.age === 18;
});

//let resultOne = orr4.find(item => item.age === 18);
console.log(resultOne);

//?---------------------------------------------
//?findIndex возвращает позицию элемента
let resultTwo = orr4.findIndex((item) => item.age === 18);
console.log(resultTwo);

//?---------------------------------------------
//? Filter - Метод ищет все элементы, на которых функция-колбэк вернёт true.
//? Если true то элемент добовляеться к результату и перебор продолжаеться.

let orr5 = [
  { name: "Вася", age: 36 },
  { name: "Коля", age: 18 },
  { name: "Оля", age: "Не скажу" },
];
let result = orr5.filter(function (item, index, array) {
  return item.age >= 18;
});

console.log(result);

//?---------------------------------------------
//? Сортировка массивов метод sort(fn)
//? Сортирует массив на месте, меняя в нём порядок элементов.

//*Сортировка слов
let orr6 = ["Иштван", "Ваня", "Оля"];
console.log(orr6.sort());

//*Сортировка чисел
let orr7 = [8, 22, 1];
console.log(orr7.sort());

/*
По умолчанию элементы сортируються как строки.
Для строк применяеться лексикографический порядок,
и действительно выходит, что "8" > "22"
*/
/*
*Функция сортировки
function compareNumeric(a, b) {
  console.log(`Сравнениваем ${a} и ${b}`);
  //if (a > b) return 1;
  //if (a == b) return 0;
  //if (a < b) return -1;

  //return a - b;//*Вместо if вычислений 
}
console.log(orr7.sort(compareNumeric));
*/
console.log(orr7.sort((a, b) => a - b));

//?---------------------------------------------
//?Метод reverse
//?Меняет порядок элементов в массиве на обратный.

let orr8 = ["Ваня", "Иштван", "Оля"];
console.log(orr8.reverse());

//!----------------------------------------------------------------
//!Преобразование массивов
//!Метод map вызывает функции для каждого элемента массива
//!и возвращает массив результатов выполнения этой функции.

let orr9 = ["Ваня", "Иштван", "Оля"];

let result1 = orr9.map(function (item, index, array) {
  return item[0];
});
//let result1 = arr.map(item => item[0]);
console.log(orr9);
console.log(result1);

//?---------------------------------------------
//? Метод split и join
//*Метод split преобразовывает строку в массив по заданному разделителю

let str = "Ваня,Иштван,Оля";

let orr10 = str.split(",");
console.log(orr10);
/*
Можно ограничить кол-во объектов
которые попадут в массив
*/
let orr11 = str.split(",", 2);
console.log(orr11);

//*Метод join преобразовывает массив в строку с заданным разделителем

let orr12 = ["Ваня", "Иштван", "Оля"];
let srt = orr12.join(".");
console.log(srt);

//Получение строки из массива
let orr13 = ["Ваня", "Иштван", "Оля"];
console.log(String(orr13));

//!--------------------------------------------------------------
//! Проверка Array.isArray() Массив или нет?

let obj = {};
let orr14 = [];
console.log(typeof obj);
console.log(typeof orr14);

//Как же нам узнать где массив а где нет?

if (Array.isArray(orr14)) {
  console.log("Это массив!");
} else {
  console.log("Это не массив!");
}

//!--------------------------------------------------------------
//! Перебор элементов массивов

let ant1 = ["Ваня", "Иштван", "Оля"];
console.log(ant1.length);

//Цыкл for
for (let i = 0; i < ant1.length; i++) {
  console.log(ant1[i]);
}

let ant2 = ["Ваня", "Иштван", "Оля"];

//Цыкл for...Of
for (let ant2Item of ant2) {
  console.log(ant2Item);
}

//?---------------------------------------------
//?Метод перебора forEach выполняет функции для каждого элемента массива

let ant3 = ["Ваня", "Иштван", "Оля"];

ant3.forEach(function (item, index, array) {
  console.log(`${item} находиться на ${index} позиции в ${array}`);
});

//Ещё можно сделать вот так вот

let ant4 = ["Ваня", "Иштван", "Оля"];

ant4.forEach(show);

function show(item) {
  console.log(item);
}

//!--------------------------------------------------------------
//! Методы reduce/reduceRight
/*
Метод похож на другие но они немного сложнее и используються
для вычисления какого-нибудь единого значения на основе всего массива.

previousValue - результат предыдущего вызова этой функции равен initial 
при первом вызове (если передан initial)
item - очередной элемент массива
index - его индекс 
array - сам массив
*/
let ant5 = [1, 2, 3, 4];
let reduceValueOne = ant5.reduce(function (previousValue, item, index, array) {
  return item + previousValue;
}, 0);
console.log(reduceValueOne);

//?---------------------------------------------
//?Пример без значения previousValue

let ant6 = ["Ваня", "Иштван", "Оля"];
/*
Если не указывать начальное значение,то оно будет 
равно первому элементу массива (previousValue=Ваня)
А работа метода начнеться со второго элемента(item=Иштван)
*/
let reduceValueTwo = ant6.reduce(function (previousValue, item, index, array) {
  console.log(previousValue);
  console.log(item);
  return `${item},${previousValue}`;
});
console.log(`Пользователи: ${reduceValueTwo}`);

//?Метод reduceRight работает аналогично но проходит по массиву справа налево.

