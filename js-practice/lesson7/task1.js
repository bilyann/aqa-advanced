// 1. Створюємо колбек-функцію для парних чисел
function handleEven() {
    console.log("number is even");
}

// 2. Створюємо колбек-функцію для непарних чисел
function handleOdd() {
    console.log("number is odd");
}

// 3. Створюємо головну функцію (HOF), яка приймає число та два колбеки
function handleNum(number, evenCallback, oddCallback) {
    if (number % 2 === 0) {
        evenCallback();
    } else {
        oddCallback();
    }
}

// 4. Викликаємо функцію з різними аргументами для перевірки
handleNum(4, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);