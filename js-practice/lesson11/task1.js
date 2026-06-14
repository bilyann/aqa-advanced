// Функція, яка приймає текст та затримку в мілісекундах
function printDelayedMessage(text, delay) {
    setTimeout(() => {
        console.log(text);
    }, delay);
}

// Виклики функції для перевірки роботи
console.log("Старт програми...");

printDelayedMessage("Привіт! Цей текст вивівся через 2 секунди.", 2000);
printDelayedMessage("А цей текст з'явився вже через 4 секунди!", 4000);