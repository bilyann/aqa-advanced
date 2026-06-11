// 1. Створюємо об'єкт car1
const car1 = {
  brand: "Toyota",
  model: "Camry",
  year: 2022
};

// 2. Створюємо об'єкт car2
const car2 = {
  brand: "BMW",
  model: "X5",
  owner: "Петро Іванов"
};

// 3. Створюємо об'єкт car3 через spread. Властивості car2 перезапишуть бренд і модель з car1.
const car3 = {
  ...car1,
  ...car2
};

// 4. Виводимо результат в консоль
console.log(car3);
// Очікуваний результат в консолі:
// { brand: 'BMW', model: 'X5', year: 2022, owner: 'Петро Іванов' }