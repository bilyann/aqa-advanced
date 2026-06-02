// 1. Створюємо масив чисел
const numbers = [10, 20, 30, 40, 50];

// 2. Обчислюємо суму елементів за допомогою reduce
const totalSum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// 3. Виводимо отриману суму на консоль
console.log(totalSum);