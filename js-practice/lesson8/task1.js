// 1. Створюємо заданий масив чисел
const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

// 2. Ініціалізуємо змінні-лічильники
let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

// 3. Проходимося по масиву класичним циклом for
for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) {
        positiveCount++;
    } else if (numbers[i] < 0) {
        negativeCount++;
    } else {
        zeroCount++;
    }
}

// 4. Виводимо результати підрахунку в консоль
console.log(`Кількість позитивних чисел: ${positiveCount}`);
console.log(`Кількість негативних чисел: ${negativeCount}`);
console.log(`Кількість нульових чисел: ${zeroCount}`);