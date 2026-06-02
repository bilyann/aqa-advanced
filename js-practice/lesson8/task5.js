// 1. Створюємо два початкових масиви з довільними значеннями
const firstArray = ["Apple", "Samsung", "Google"];
const secondArray = ["Xiaomi", "OnePlus", "Huawei"];

// 2. Об'єднуємо їх в один новий масив за допомогою Spread оператора (...)
const combinedArray = [...firstArray, ...secondArray];

// 3. Виводимо отриманий об'єднаний масив на консоль
console.log(combinedArray);