// 1. Створюємо масив чисел від 1 до 10
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// 2. Відфільтровуємо лише парні числа
const evenNumbers = numbers.filter((number) => number % 2 === 0);

// 3. Виводимо отриманий масив на консоль
console.log(evenNumbers);