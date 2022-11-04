// 1. Напишите две функции
// letMeSeeYourName(callback) - спрашивает имя пользователя
//через prompt и вызывает callback функцию
//greet(name) - коллбек принимающий имя и логирующий в консоль
//строку "Привет <name>"
//Реализуй проверку, что prompt не пустой
//++++++++++++++++++++++++++++++++++++++++++

function letMeSeeYourName(callback) {
}

//====================================================
//====================================================

// 2. Напишите две функции
//makeProduct(name, price, callback) - принимает
//имя и цену товара, а так же callback.
//Функция создает объект товара, добавляя ему уникальный
//идентификатор в свойство id и вызывает callback
//передавая ему созданный объект.
//showProduct(product) - коллбек принимающий объект
//продукта и логирующий его в консоль
//++++++++++++++++++++++++++++++++++++++++++

function makeProduct(name, price, callback) {
}

//====================================================
//====================================================

// 3. Напишите функцию makeShef(shefName) которая возвращает функцию
//makeDish(dish), помнящую имя шефа при её вызове
//Функция makeDish должна логировать "<shef> is cooking <dish>"
//++++++++++++++++++++++++++++++++++++++++++

const makeShef = function (shefName) {
}

//====================================================
//====================================================

// 4. Исправьте ошибки, чтобы код работал
// const product = {
//   price: 5000,
//   showPrice() {
//     console.log(price);
//   },
// };
// product.showPrice();

//====================================================
//====================================================

// 5. Исправьте чтобы код работал
function callAction(action) {
    action()
}

// const item = {
//     getQuantity() {
//         console.log(this.quantity);
//     },
//     quantity: 5,
// }

// callAction(item.getQuantity);

//====================================================
//====================================================

// 6. Напишите функцию each(array, callback), которая
//первым параметром принимает массив, а вторым - функцию,
//которая применится к каждому элементу массива.
//Функция each должна вернуть новый массив, элементами
//которого будут результаты вызова callback
//callback функция должна умножать элементы на 2
//++++++++++++++++++++++++++++++++++++++++++
function each(array, callback) {
}

// const array = [3, 5, 6, 34, 8, 83, 12, 34];
// console.log(each(array, doubleValues));

//====================================================
//====================================================

// 7. Напишите функцию makeCounter, которая возвращает другую
//функцию, которая считает и логирует количество своих вызовов
//++++++++++++++++++++++++++++++++++++++++++

function makeCounter() {
}

// const counter = makeCounter()
// console.log(counter());
// console.log(counter());
// console.log(counter());

//====================================================
//====================================================

// 8. Напишите функцию savePassword(password) которая принимает
//пароль и возвращает внутреннюю функцию, которая принимает
//строку и возвращает буль true, если строка совпадает с сохраненным
//паролем и false - если не совпадает
//++++++++++++++++++++++++++++++++++++++++++

const savePassword = (password) => {
}

//====================================================
//====================================================

// 9. Напишите функцию для хранения скидки. Функция возвращает
//другую функцию, которая принимает сумму покупки
//и возвращает финальную сумму с сохраненной скидкой.
//++++++++++++++++++++++++++++++++++++++++++

function makeDiscount(discount) {
}

//====================================================
//====================================================

// 10. Напиши функцию конструктор User для создания пользователя со следующими свойствами
//a. userName - имя, строка
//b. age - возраст, число
//c. numbersOfPost - количество постов, число
//d. класс ожидает 1 параметр - объект настроек с одноименными свойствами

//Добавь метод getInfo(), который возвращает строку:
//`Пользователю ${} ${} лет и у него ${} публикаций.`

const User = function (userObj) {
}

//====================================================
//====================================================

// 10. Напиши функцию конструктор Storage который создаёт объекты
//для управления складом товаров.
//При вызове будет получать один агрумент - начальный массив товаров,
//и записывать его в свойство items.
//Добавь методы класса:
//getItems() - возвращайте массив товаров
//addItems(item) - получает новый товар и добавляет его к текущим
//removeItem(item) - плучает товар и, если он есть, удаляет его из текущих
//++++++++++++++++++++++++++++++++++++++++++

//====================================================
//====================================================

// 11. Напиши класс Client который создает объект
//со свойствами login email
//Объяви приватные свойства #login #email,
//доступ к которым сделай через геттер и сеттер login email
//++++++++++++++++++++++++++++++++++++++++++

class Client {
}

//====================================================
//====================================================


// 12. Напиши класс Notes который управляет коллекцией заметок в
//свойстве items.
//Заметка это объект со свойствами text priority
//Добавь классу статическое свойство Priopity,
//в котором будет храниться объект с приоритетами.
//Добавь методы addNote(note), removeNote(text)
//updatePriority(text, newPriority)
//+++++++++++++++++++++++++++++++++++++++++++

class Notes {
}

//====================================================
//====================================================


// 13. 
// Создай класс для калькулятора, который имеет следующие методы:
// метод number, который принимает начальное значение для последующих операций
// геттер, который возвращает финальный результат всех операций, проведенных с числом
// методы add, substruct, divide, multiply
// объект класса может проводить последовательные операции в виде цепочки
// +++++++++++++++++++++++++++++++++++++++++++++++++++

class Calculator {
}

// const calculator = new Calculator();
// const res = calculator
// .number(10)
// .add(10)
// .divide(2)
// .multiply(4)
// .substruct(5)
// .result;

// console.log(res); // 35

// const res2 = calculator
// .number(20)
// .substruct(40)
// .multiply(-8)
// .divide(160)
// .add(20)
// .result;

// console.log(res2) // 21


//====================================================
//====================================================

// 14. Создать класс Worker у которого есть свойства name, age, salary.
//У класса Worker есть метод getSalary.
//Создать класс TopLevelWorker у которого есть свойство hierarchyLevel
//и который наследует класс Worker, добавляя метод getHierarchyLevel
//Реализовать задачу с помощью ES5 прототипов и ES6 классов

const HIERARCHY_LEVEL = {
    TOP: 'top',
    REGULAR: 'regular',
}

const workerObj = {
    name: 'Mango',
    surname: 'Worker',
    age: 30,
    position: 'FE developer',
    salary: 5000,
}

//ES5

const Worker = function (obj = {}) {
}


//++++++++++++++++++++++++++++++++++++++

//ES6

class WorkerES6 {
}
