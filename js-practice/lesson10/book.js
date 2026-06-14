class Book {
    constructor(title, author, year) {
        this.title = title;
        this.author = author;
        this.year = year;
    }

    // Геттери та сеттери з валідацією
    get title() {
        return this._title;
    }
    set title(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log("Помилка валідації: Назва книги має бути непустим рядком.");
            return;
        }
        this._title = value;
    }

    get author() {
        return this._author;
    }
    set author(value) {
        if (typeof value !== 'string' || value.trim() === '') {
            console.log("Помилка валідації: Автор має бути непустим рядком.");
            return;
        }
        this._author = value;
    }

    get year() {
        return this._year;
    }
    set year(value) {
        const currentYear = new Date().getFullYear();
        if (typeof value !== 'number' || value <= 0 || value > currentYear) {
            console.log(`Помилка валідації: Рік видання має бути числом від 1 до ${currentYear}.`);
            return;
        }
        this._year = value;
    }

    // Метод класу
    printInfo() {
        console.log(`Книга: "${this.title}", Автор: ${this.author}, Рік видання: ${this.year}`);
    }

    // Статичний метод
    static getOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) {
            return null;
        }
        return booksArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
}

export default Book;