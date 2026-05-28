// Спосіб 1: Класичний варіант з розгалуженням if/else
function isAdultIfElse(age) {
    if (age >= 18) {
        return true;
    } else {
        return false;
    }
}

// Спосіб 2: Професійний/лаконічний варіант
const isAdultShort = (age) => age >= 18;


// --- Виклики функції та виведення в консоль ---

// Перевірка для віку 25
const checkAdult25 = isAdultShort(25);
console.log(`Is 25 years old an adult?: ${checkAdult25}`); // Очікуємо: true

// Перевірка для віку 15
const checkAdult15 = isAdultShort(15);
console.log(`Is 15 years old an adult?: ${checkAdult15}`); // Очікуємо: false