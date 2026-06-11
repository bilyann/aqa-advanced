// 1. Створюємо об'єкт book з властивостями
const book = {
  title: "1984",
  author: "George Orwell",
  year: 1949
};

// 2. Деструктуризуємо назву (title) та автора (author) з об'єкта
const { title, author } = book;

// 3. Виведіть деструктуризовані змінні в консоль
console.log(title);
console.log(author);