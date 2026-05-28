// 1. Створюємо функцію з валідацією параметрів
function divide(numerator, denominator) {
    if (typeof numerator !== 'number' || typeof denominator !== 'number') {
        throw new Error("Both arguments must be numbers!");
    }
    if (denominator === 0) {
        throw new Error("Division by zero is not allowed!");
    }
    return numerator / denominator;
}

// 2. Функція-хелпер для виконання викликів у try...catch...finally
function runDivision(numerator, denominator) {
    try {
        const result = divide(numerator, denominator);
        console.log(`Result of ${numerator} / ${denominator} = ${result}`);
    } catch (error) {
        console.error(`Error occurred: ${error.message}`);
    } finally {
        console.log("Робота завершена");
    }
}

// 3. Тестуємо різні випадки
console.log("--- Тест 1: Валідні дані ---");
runDivision(10, 2);

console.log("\n--- Тест 2: Ділення на нуль ---");
runDivision(10, 0);

console.log("\n--- Тест 3: Передача рядка замість числа ---");
runDivision(10, "2");