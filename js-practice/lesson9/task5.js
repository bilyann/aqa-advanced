// 1. Створюємо масив об'єктів users з довільними властивостями
const users = [
  { name: "Олександр", email: "alex@gmail.com", age: 32 },
  { name: "Марія", email: "maria@test.com", age: 24 },
  { name: "Дмитро", email: "dima@proton.com", age: 19 }
];

// 2. Перебираємо масив через for...of з деструктуризацією властивостей прямо в циклі
for (const { name, email, age } of users) {
  // Виводимо значення властивостей в консоль
  console.log(`Ім'я: ${name}, Email: ${email}, Вік: ${age}`);
}