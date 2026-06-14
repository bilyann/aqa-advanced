import Book from './Book.js';
import EBook from './EBook.js';

// 1. Створення об'єктів класу Book та виклик їх методів
console.log("--- Створення звичайних книг (Book) ---");
const book1 = new Book("Кобзар", "Тарас Шевченко", 1840);
const book2 = new Book("Захар Беркут", "Іван Франко", 1883);
const book3 = new Book("Intermezzo", "Михайло Коцюбинський", 1908);
const book4 = new Book("1984", "Джордж Орвелл", 1949);
const book5 = new Book("Колір магії", "Террі Пратчетт", 1983);

book1.printInfo();
book2.printInfo();
book3.printInfo();
book4.printInfo();
book5.printInfo();

// 2. Створення об'єкта класу EBook та виклик його методу
console.log("\n--- Створення електронної книги (EBook) ---");
const ebook1 = new EBook("Тигролови", "Іван Багряний", 1944, "epub");
ebook1.printInfo();

// 3. Використання геттерів та сеттерів з перевіркою валідації
console.log("\n--- Робота з геттерами/сеттерами та валідацією ---");
book1.title = "Новий Кобзар"; // Зміна через сеттер
console.log(`Зчитано через геттер назву: ${book1.title}`);

console.log("Спроба записати некоректні дані:");
book1.year = -50;       // Спрацює валідація у Book
ebook1.fileFormat = "txt"; // Спрацює валідація у EBook

// 4. Виклик статичного методу для пошуку найдавнішої книги
console.log("\n--- Пошук найдавнішої книги (Статичний метод Book) ---");
// Додали нові книги до загального списку на перевірку
const booksList = [book1, book2, book3, book4, book5, ebook1];
const oldest = Book.getOldestBook(booksList);
if (oldest) {
    oldest.printInfo();
}

// 5. Виклик статичного методу для конвертації Book в EBook
console.log("\n--- Створення EBook з Book (Статичний метод EBook) ---");
const converted = EBook.fromBook(book5, "mobi"); // Конвертуємо Пратчетта в mobi
if (converted) {
    converted.printInfo();
}