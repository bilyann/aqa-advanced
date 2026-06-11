// 1. Створюємо об'єкт person з початковими властивостями
const person = {
  firstName: "Олена",
  lastName: "Маркарова",
  age: 38
};

// 2. Додаємо властивість email
person.email = "olena.petrenko@gmail.com";

// 3. Видаляємо властивість age
delete person.age;

// 4. Виведіть оновлений об'єкт person в консоль
console.log(person);
// Очікуваний результат: { firstName: 'Олена', lastName: 'Петренко', email: 'olena.petrenko@example.com' }