"use strict";

//Создание объекта
/** 
let userInfoOne = new object(); // синтаксис "Конструктор объкта"
let userInfoTwo = {}; // синтаксис "Литерал объкта"
*/

//!-------------------------------------------------------------------------
//! Свойтство объктов. Ключ + значение

let userInfo = {
  name: "Влад", // Свойство объекта
  age: 20, // Последняя (висячая)запятая
  "Likes JS": true, // Имя из двух и больше слов
};

console.log(userInfo);
console.log(userInfo.name);
console.log(userInfo["Likes JS"]); //Такой способ вызвать имя из объекта

//?--------------------------------------------------------------
//?Вычисляемое либо передаваемое имя

//*Вычисляем имя
let firstPartOne = "Likes";
let userInfoOne = {
  name: "Вася",
  age: 30,
  [firstPartOne + " javascript"]: true,
};
console.log(userInfoOne["Likes javascript"]);

//*Передаем имя
let firstPartTwo = "likes";
let userInfoTwo = {
  name: "Владос",
  age: 30,
  [firstPartTwo]: true,
};
console.log(userInfoTwo[firstPartTwo]);

//*Примущества квадратных скобок!
//*Немножко расширяет наши возможности точка например не вызовет переменую "key"

let key = "name";
console.log(userInfoTwo[key]);

//*Для объектов не существует зарезирвированых слов и их можно использовать

//?--------------------------------------------------------------
//? Имена = строки либо символы
let userInfoThree = {
  0: "Влад Копотун", // 0 тоже самое что и "0"
};
console.log(userInfoThree[0]);
console.log(userInfoThree["0"]);

//!-------------------------------------------------------------------------
//!Тип данных Symbol
//*Создаём символы id с описанием (именем) "id"

let id = Symbol("id");
let userInfoFo = {
  name: "Влад",
  age: "20",
  [id]: "Какоето значение",
};
console.log(userInfoFo);

// Основное применение символов:
// 1."Скрытие" свойства объектов
//   Символьное свойство не появится в for..in
// 2.Использование системных символов
//  Symbol.interator, Symbol.toPrimitive и т.д

//!-------------------------------------------------------------------------
//!Вложеность
let userInfoFive = {
  name: "Влад",
  age: 20,
  address: {
    city: "Krakow",
    street: "Osiedle Teatralne",
  },
};
console.log(userInfoFive);
console.log(userInfoFive.address);
console.log(userInfoFive.address.city);

//!-------------------------------------------------------------------------
//!Значение свойств объекта из переменных
function makeUserInfo(name, age) {
  return {
    name: name,
    age: age,
    //  ...другие свойства
  };
}
let user = makeUserInfo("Влад", 20);
console.log(user);

//*Или

function makeUserInfoTwo(name, age) {
  return {
    name, //Тоже самое что и name:name;
    age, //Тоже самое что и age:age;
    "likes javascript": true,
    // ...другие свойства
  };
}
let userTwo = makeUserInfoTwo("Вася", 25);
console.log(userTwo);

//!-------------------------------------------------------------------------
//!Изменение объекта

//*Добавление свойства
let userInfoSix = {
  name: "Влад",
};
console.log(userInfoSix);

userInfoSix.age = 20;
console.log(userInfoSix);

userInfoSix["Likes javascript"] = true;
console.log(userInfoSix);

userInfoSix.address = {
  city: "Krakow",
  street: "Osiedle Teatralne",
};

console.log(userInfoSix);

//?--------------------------------------------------------------
//?Удаление свойств
let userInfoSeventh = {
  name: "Влад Копотун",
  age: 20,
  "Likes javascript and Lesson": true,
};
console.log(userInfoSeventh);

delete userInfoSeventh.age;
console.log(userInfoSeventh);

delete userInfoSeventh["Likes javascript and Lesson"];
console.log(userInfoSeventh);

//?Изменение значения свойства
//*Так можно сделать даже в константе
let userInfoEight = {
  name: "Влад",
  age: 30,
};
console.log(userInfoEight);

userInfoEight.age = 18;
console.log(userInfoEight);

//?--------------------------------------------------------------
//?Копирование объектов
let userInfoNine = {
  name: "Артём",
  age: 28,
};
console.log(userInfoNine);

let userNine = userInfoNine;
console.log(userNine);

userNine.age = 18;
console.log(userNine);

//?--------------------------------------------------------------
//?Дублирование объектов (Object.assign)
//*Cинтаксис
//*Object.assign(Куда(объект),что(свойство #1), что(свойство #2), ...);
let userInfoTen = {
  name: "Иоан",
  age: 30,
};

let userThree = Object.assign({}, userInfoTen);

userThree.age = 22;

console.log(userInfoTen); // Вызывает старый объект с старыми значениями
console.log(userThree); // Вызывает новый объект с уже изменёным значением

//*Так же можно добовлять новые свойства в объект
let userInfo11 = {
  name: "John",
  age: 25,
};

Object.assign(userInfo11, { ["Likes javascript"]: true, city: "Krakow" });
console.log(userInfo11);

//!-------------------------------------------------------------------------
//!Проверка существования свойства
let userInfo12 = {
  name: "Diana",
  age: 19,
};
//console.log(userInfo12.age);

if (userInfo12.age) {
  // True or False
  console.log(userInfo12.age);
}

//?--------------------------------------------------------------
//?Опциональная цепочка
let userInfo13 = {
  name: "Adam",
  age: 36,
  //address: {
  //city: "Berlin",
  //street:"Freedom",
  //},
};

//*Если не будет этого свойства то будет ошибка но если использовать
//*Опциональную цепочку "?" то ошибки не будет а будет Undefined

//console.log(userInfo13.address.street);
console.log(userInfo13?.address?.street);

//?--------------------------------------------------------------
//?Оператор "in"
//*В большенстве случаев сработает сравнение с Underfined
//*Либо опциональная цепочка "?"
//*Но есть особый случай,когда свойство существует,но содержит значение
//*Undefined.
//*В этом случае необходимо использовать "in".

let userInfo14 = {
  name: "Stas",
  age: 45,
  address: {
    city: "Kharkiw",
    street: "Kvartalnui",
  },
};

// Ищет name в userInfo14
if ("name" in userInfo14) {
  console.log(userInfo14.name);
}

//!-------------------------------------------------------------------------
//! Цыкл "for...in"
//Для перебора всех свойств объекта используеться цыкл for..in
//Этот цикл отличаеться от изученного ранее цыкла for(;;).

/*for (let key in object) {
  //*Тело цыкла выполняеться для каждого свойства объекта
}*/

let userInfo15 = {
  name: "Stas",
  age: 45,
  address: {
    city: "Kharkiw",
    street: "Kvartalnui",
  },
};

for (let key in userInfo15) {
  //Ключи
  console.log(key); //Name,age,address
  //Значение ключей
  console.log(userInfo15[key]); // Стас,45,Object {}
}

for (let key in userInfo15.address) {
  //Ключи
  console.log(key); //city,street
  //Значение ключей
  console.log(userInfo15.address[key]); // "Kharkiw", "Kvartalnui"
}

//!-------------------------------------------------------------------------
//!Методы объекта

let userInfo16 = {
  name: "Victor",
  age: 27,
  address: {
    city: "Krakow",
    street: "Osiedle",
  },

  //В качестве свойства объекта может быть и функция
  /*

    showInfo: function () {
    //* skowInfo = Ключ
    console.log(
      `${userInfo16.name},${userInfo16.age} лет. Aдресд: г.${userInfo16.address.city}, ул.${userInfo16.address.street}`
    );
  },
  
  */

  //Более короткой записью такого метода будет
  //showInfo - Как имя функции
  showInfo() {
    console.log(
      `${userInfo16.name}, ${userInfo16.age} лет. Aдрес: г.${userInfo16.address.city}, ул.${userInfo16.address.street}`
    );
  },
};
userInfo16.showInfo();

//?----------------------------------------------------------------
//?Использование this
//*Надёжнее

let userInfo17 = {
  name: "Ola",
  age: 26,
  address: {
    city: "Krakow",
    street: "Osiedle",
  },
  showInfo() {
    console.log(
      `${this.name}, ${this.age} лет. Aдрес: г.${this.address.city}, ул.${this.address.street}`
    );
  },
};
userInfo17.showInfo();

//?-------------------------------------------------------------------------
//?Стрелочная функция с This
let userInfo18 = {
  name: "Ana",
  age: 34,
  address: {
    city: "Krakow",
    street: "Welicka",
  },
  showInfo() {
    /*
    //*Не будет работать потому что будет this подключаться к showInfo в котором нет значений
    function show() {
      console.log(
        `${this.name}, ${this.age} лет. Aдрес: г.${this.address.city}, ул.${this.address.street}`
      );
    }
    */

    //*У стрелочной функции нет своего "this" используються
    //*значение из объекта
    let show = () =>
      console.log(
        `${this.name},${this.age} лет. Aдрес: г.${this.address.city}, ул.${this.address.street}`
      );
    show();
  },
};
userInfo18.showInfo();

//!-------------------------------------------------------------------------
//!Функция-конструктор
/*
Обычный синтаксис позволяет создать только один объект.Но зачастую нам нужно
создать множество однотипных объектов,таких как пользователи,элементы меню и т.д.
Это можно сделать при помощи функции - конструктор и оператор "new"


Функции - конструкторы являються обычными функциями.
Но есть два правила:
1.Имя функции - конструктора должно начинаться с большой буква.
2.Функция - конструктор должна вызываться при помощи оператора "new"
*/

function UserInfo(name) {
  //this = {}; Создаеться пустой  объект (Неявно)

  this.name = name;
  this.age = 30;

  // return this;Возвращается объкт (Неявно)
}

console.log(new UserInfo("Vania"));
console.log(new UserInfo("Lena"));
