// 1. Створюємо початковий масив чисел
const originalArray = [1, 2, 3, 4, 5];

// 2. Створюємо новий масив, використовуючи елемент та його індекс
const newArray = originalArray.map((element, index) => element * index);

// 3. Виведіть новий масив на консоль
console.log(newArray);