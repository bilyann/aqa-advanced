import Book from './Book.js';

class EBook extends Book {
    constructor(title, author, year, fileFormat) {
        super(title, author, year);
        this.fileFormat = fileFormat;
    }

    // Геттер та сеттер з валідацією
    get fileFormat() {
        return this._fileFormat;
    }
    set fileFormat(value) {
        const allowedFormats = ['pdf', 'epub', 'mobi', 'fb2'];
        if (typeof value !== 'string' || !allowedFormats.includes(value.toLowerCase())) {
            console.log(`Помилка валідації: Формат файлу має бути одним із: ${allowedFormats.join(', ')}.`);
            return;
        }
        this._fileFormat = value.toLowerCase();
    }

    // Перевизначений метод (Поліморфізм)
    printInfo() {
        console.log(`Електронна книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}, Формат файлу: ${this.fileFormat.toUpperCase()}`);
    }

    // Статичний метод-конвертер
    static fromBook(bookInstance, fileFormat) {
        if (!(bookInstance instanceof Book)) {
            console.log("Помилка: Аргумент не є екземпляром класу Book.");
            return null;
        }
        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, fileFormat);
    }
}

export default EBook;