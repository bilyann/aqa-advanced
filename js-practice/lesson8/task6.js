// 1. Вихідний масив чисел
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// 2. Створюємо новий масив на основі вихідного (копіюємо через Spread)
const sortedList = [...numbersList];

// 3. Відсортовуємо копію масиву від меншого до більшого
sortedList.sort((a, b) => a - b);

// 4. Виводимо обидва масиви в консоль
console.log("Original array:", numbersList);
console.log("Sorted array:", sortedList);